export class GameEnv {
    /**
     * Speed boost-related properties
     */
    static playerSpeedBoost = false;       // Flag to indicate if the Player is boosted
    static playerSpeedMultiplier = 1;     // Multiplier for Player's speed (default is 1)
    static speedBoostDuration = 5000;     // Duration of the speed boost in milliseconds

    // Existing properties ...
    static userID = "Guest";
    static player = null;
    static levels = [];
    static currentLevel = null;
    static gameObjects = [];
    static isInverted = false;
    static gameSpeed = 2;
    static backgroundDirection = 0;
    static transitionHide = false;
    static gravity = 3;
    static destroyedMushroom = false;
    static destroyedMagicBeam = false;
    static destroyedChocoFrog = false;
    static playMessage = false;
    static difficulty = "normal";
    static innerWidth;
    static prevInnerWidth;
    static innerHeight;
    static top;
    static bottom;
    static prevBottom;
    static invincible = false;
    static goombaInvincible = false;
    static goombaBounce = false;
    static goombaBounce1 = false;

    static timerActive = false;
    static timerInterval = 10;
    static coinScore = 0;
    static time = 0;
    static darkMode = true;
    static playerAttack = false;

    static playerChange = false;

    static claimedCoinIds = [];

    constructor() {
        throw new Error('GameEnv is a static class and cannot be instantiated.');
    }

    /**
     * Activate the player's speed boost.
     * Called when the player collides with a Mushroom.
     * @static
     */
    static activateSpeedBoost() {
        this.playerSpeedBoost = true;
        this.playerSpeedMultiplier = 3; // Example multiplier for the speed boost

        // Reset the speed boost after the specified duration
        setTimeout(() => {
            this.playerSpeedBoost = false;
            this.playerSpeedMultiplier = 1; // Reset to normal speed
        }, this.speedBoostDuration);
    }

    // Existing methods...
    static setTop() {
        const header = document.querySelector('header');
        if (header) {
            this.top = header.offsetHeight;
        }
    }

    static setBottom() {
        this.bottom = this.top + this.backgroundHeight;
    }

    static initialize() {
        this.prevInnerWidth = this.innerWidth;
        this.prevBottom = this.bottom;

        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.setTop();
    }

    static resize() {
        GameEnv.initialize();

        for (var gameObject of GameEnv.gameObjects) {
            gameObject.size();
        }
    }

    static update() {
        if (GameEnv.player === null || GameEnv.player.state.isDying === false) {
            for (const gameObject of GameEnv.gameObjects) {
                gameObject.update();
                gameObject.serialize();
                gameObject.draw();
            }
        }
    }

    static destroy() {
        for (var i = GameEnv.gameObjects.length - 1; i >= 0; i--) {
            const gameObject = GameEnv.gameObjects[i];
            gameObject.destroy();
        }
        GameEnv.gameObjects = [];
    }

    static setInvert() {
        for (var gameObject of GameEnv.gameObjects) {
            if (gameObject.invert && !this.isInverted) {
                gameObject.canvas.style.filter = "none";
            } else if (gameObject.invert && this.isInverted) {
                gameObject.canvas.style.filter = "invert(100%)";
            } else {
                gameObject.canvas.style.filter = "none";
            }
        }
    }

    static PlayerPosition() {
        let playerX = 0;
        let playerY = 0;
    }

    static playSound(id) {
        const sound = document.getElementById(id);
        sound.play();
    }

    static updateParallaxDirection(key) {
        switch (key) {
            case "a":
                if (GameEnv.player?.x > 2) {
                    GameEnv.backgroundDirection = -1;
                }
                break;
            case "d":
                if (GameEnv.player?.x < (GameEnv.innerWidth - 2)) {
                    GameEnv.backgroundDirection = 1;
                }
                break;
            case "s":
                if (keys.includes("a") && keys.includes("s")) {
                    if (GameEnv.player?.x > 2) {
                        GameEnv.backgroundDirection = -5;
                    }
                } else if (keys.includes("d") && keys.includes("s")) {
                    if (GameEnv.player?.x < (GameEnv.innerWidth - 2)) {
                        GameEnv.backgroundDirection = 5;
                    }
                } else {
                    GameEnv.backgroundDirection = 0;
                }
                break;
            default:
                GameEnv.backgroundDirection = 0;
                break;
        }
    }
}

export default GameEnv;
