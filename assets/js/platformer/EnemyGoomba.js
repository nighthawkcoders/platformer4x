import Character from './Character.js';
import GameEnv from './GameEnv.js';
import GameControl from './GameControl.js';

export class Goomba extends Character {
    constructor(canvas, image, data, xPercentage, yPercentage, name, minPosition, range = 300) {
        super(canvas, image, data);

        this.name = name;
        this.y = yPercentage;
        this.x = xPercentage * GameEnv.innerWidth;
        this.minPosition = this.x - range;
        this.maxPosition = this.x + range;

        this.immune = 0;

        // Increased speed for Goomba
        this.speed = 15;

        // Movement delay between 1 and 5 seconds
        this.movementDelay = Math.random() * 4000 + 1000;

        this.startMovement();
    }

    startMovement() {
        const move = () => {
            if (this.speed !== 0) {
                this.x += this.speed;

                if (this.x <= this.minPosition || this.x >= this.maxPosition) {
                    this.reverseDirection();
                }
            }
            setTimeout(move, this.movementDelay);
        };

        move();
    }

    update() {
        super.update();

        // Random Event 2: Time Stop All Goombas
        if (GameControl.randomEventId === 2 && GameControl.randomEventState === 1) {
            this.speed = 0;
            if (this.name === "goombaSpecial") {
                GameControl.endRandomEvent();
            }
        }

        // Random Event 3: Kill a Random Goomba
        if (GameControl.randomEventId === 3 && GameControl.randomEventState === 1) {
            this.destroy();
            GameControl.endRandomEvent();
        }

        // Chance for Goomba to turn Gold
        if (["normal", "hard"].includes(GameEnv.difficulty)) {
            if (Math.random() < 0.00001) {
                this.canvas.style.filter = 'brightness(1000%)';
                this.immune = 1;
            }
        }

        // Immunize Goomba & Texture It
        if (GameEnv.difficulty === "hard") {
            this.canvas.style.filter = "invert(100%)";
            this.canvas.style.scale = 1.25;
            this.immune = 1;
        } else if (GameEnv.difficulty === "impossible") {
            this.canvas.style.filter = 'brightness(1000%)';
            this.immune = 1;
        }

        // Randomly trigger a jump
        if (Math.random() < 0.1) {
            this.jump();
        }

        this.playerBottomCollision = false;
    }

    reverseDirection() {
        this.speed = -this.speed;
    }

    collisionAction() {
        const other = this.collisionData.touchPoints.other;

        if (other.id === "finishline") {
            if (other.left || other.right) {
                this.reverseDirection();
            }
        }

        if (other.id === "wall") {
            // Reverse direction upon hitting a wall
            if (other.left || other.right) {
                this.reverseDirection();
            }
        }

        if (other.id === "player") {
            // Collision: Top of Goomba with Bottom of Player
            if (other.bottom && this.immune === 0) {
                GameEnv.goombaBounce = true;
                this.explode();
                GameEnv.playSound("goombaDeath");

                setTimeout(() => {
                    this.destroy();
                }, 1500);
            } else {
                // Player hit Goomba from the side or below: Trigger death
                this.triggerPlayerDeath();
            }
        }

        if (other.id === "goomba") {
            if (GameEnv.difficulty !== "impossible" && (other.left || other.right)) {
                this.reverseDirection();
            }
        }

        if (other.id === "jumpPlatform") {
            if (other.left || other.right) {
                this.reverseDirection();
            }
        }
    }

    triggerPlayerDeath() {
        // Ensure player death logic does not block the game
        if (typeof GameEnv.triggerPlayerDeath === "function") {
            GameEnv.triggerPlayerDeath();
        }
    }

    explode() {
        const shards = 10;
        for (let i = 0; i < shards; i++) {
            const shard = document.createElement('div');
            shard.style.position = 'absolute';
            shard.style.width = '5px';
            shard.style.height = '5px';
            shard.style.backgroundColor = 'brown';
            shard.style.left = `${this.x}px`;
            shard.style.top = `${this.y}px`;
            this.canvas.parentElement.appendChild(shard);

            const angle = Math.random() * 2 * Math.PI;
            const speed = Math.random() * 5 + 2;

            const shardX = Math.cos(angle) * speed;
            const shardY = Math.sin(angle) * speed;

            shard.animate(
                [
                    { transform: 'translate(0, 0)', opacity: 1 },
                    { transform: `translate(${shardX * 20}px, ${shardY * 20}px)`, opacity: 0 },
                ],
                {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'forwards',
                }
            );

            setTimeout(() => {
                shard.remove();
            }, 1000);
        }
        this.canvas.style.opacity = 0;
    }

    jump() {
        // Implement your jump logic here
    }
}

export default Goomba;
