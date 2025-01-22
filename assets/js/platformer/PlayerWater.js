import GameEnv from './GameEnv.js';
import PlayerBase from './PlayerBase.js';
import GameControl from './GameControl.js';

/**
 * @class PlayerWater class
 * @description PlayerWater.js is used for the player-controlled character in water-themed levels.
 * The class extends PlayerBase and allows the character to interact with water-specific elements in the game.
 * 
 * @extends PlayerBase 
 */
export class PlayerWater extends PlayerBase {

    /** GameObject instantiation: constructor for PlayerWater object
     * @extends Character 
     * @param {HTMLCanvasElement} canvas - The canvas element to draw the player on.
     * @param {HTMLImageElement} image - The image to draw the player with.
     * @param {Object} data - The data object containing the player's properties.
     */
    constructor(canvas, image, data) {
        super(canvas, image, data);

        // Water-related variables
        this.timer = false;
        GameEnv.invincible = false; // Player is not invincible 
    }

    /**
     * @override
     * gameLoop helper: Update Player's behavior underwater, replacing PlayerBase updateJump
     */
    updateJump() {  
        let jumpHeightFactor;
        if (GameEnv.difficulty === "easy") {
            jumpHeightFactor = 0.35;  // Reduced jump height underwater
        } else if (GameEnv.difficulty === "normal") {
            jumpHeightFactor = 0.25;
        }
        if(GameEnv.currentLevel.tag == "boss"){
            jumpHeightFactor = 0;
        }
        this.setY(this.y - (this.bottom * jumpHeightFactor));  // Modify Y position based on jump height
    }

    /**
     * @override
     * gameLoop: Watch for Player collision events (water-specific interactions)
     */ 
    handleCollisionStart() {
        super.handleCollisionStart(); // Calls the super class method
        // Water-themed collisions
        this.handleCollisionEvent("waterSurface");
        this.handleCollisionEvent("fish");
        this.handleCollisionEvent("shark");
        this.handleCollisionEvent("waterChest");
    }
   
    /**
     * @override
     * gameLoop: Handles additional Player reactions to water-based collisions
     */
    handlePlayerReaction() {
        super.handlePlayerReaction(); // Calls the super class method
        
        switch (this.state.collision) {
            case "waterSurface":
                // Player has reached the surface of the water
                if (this.collisionData.touchPoints.this.top) {
                    // Enable swimming or set player to water breathing mode
                    this.state.isSwimming = false;
                    this.state.isBreathing = true;
                }
                break;
            case "fish":
                // Interaction with fish (bounce, interact, etc.)
                if (this.collisionData.touchPoints.this.top && !this.state.isDying) {
                    this.y = this.y - 50;  // Bounce up when player hits the fish
                }
                break;
            case "shark":
                // Interaction with sharks (damage, dodge, etc.)
                if (this.collisionData.touchPoints.this.left || this.collisionData.touchPoints.this.right) {
                    if (GameEnv.difficulty === "normal" || GameEnv.difficulty === "hard") {
                        if (!this.state.isDying) {
                            this.state.isDying = true;
                            this.canvas.style.transition = "transform 0.5s";
                            this.canvas.style.transform = "rotate(-90deg) translate(-26px, 0%)";
                            GameEnv.playSound("PlayerDeath");
                            setTimeout(async() => {
                                await GameControl.transitionToLevel(GameEnv.levels[GameEnv.levels.indexOf(GameEnv.currentLevel)]);
                            }, 900); 
                        }
                    } else if (GameEnv.difficulty === "easy") {
                        // Shark bounce effect for easy mode
                        this.x -= 15;  // Bounce player to the left
                    }
                }
                break;
            case "waterChest":
                // Chest interaction underwater (treasure or power-ups)
                if (!GameEnv.destroyedChest) {
                    GameEnv.destroyedChest = true;
                    this.canvas.style.filter = 'invert(1)';  // Chest treasure effect
                    setTimeout(() => {
                        this.canvas.style.filter = 'invert(0)';
                    }, 2000); // Effect lasts for 2 seconds
                }
                break;  
        }
    }
}

export default PlayerWater;

