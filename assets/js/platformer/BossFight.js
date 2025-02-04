import GameEnv from './GameEnv.js';
import GameControl from './GameControl.js';
import Enemy from './Enemy.js';
import hpBar from './hpBar.js';

export class Boss extends Enemy {
    // instantiation: constructor sets up player object
    constructor(canvas, image, data, xPercentage, yPercentage, name, minPosition) {
        super(canvas, image, data, xPercentage, yPercentage, name, minPosition);
        this.storeSpeed = this.speed;
        this.animationSpeed = data?.animationSpeed || 1; //higher "animationSpeed" means slower animation
        this.counter = data?.animationSpeed;
        this.enemySpeed();
        //Hp Bar
        this.maxHp = 100; // Maximum health points
        this.currentHp = 100; // Current health points
        this.hpBar = new hpBar(100, 15, this.canvasWidth, this.canvasHeight, this.maxHp, this.currentHp, this.x, this.y)

        this.attackRange = 50;
        this.laserCooldown = 100; // Cooldown period for firing lasers
        this.laserCounter = 0;
    }

    //overwrite the method
    updateFrameX() {
        // Update animation frameX of the object
        if(!this.state.isDying || this.state.animation != "death"){
            if (this.frameX < this.maxFrame) {
                if(this.counter > 0){
                    this.frameX = this.frameX;
                    this.counter--;
                }
                else{
                    this.frameX++
                    this.counter = this.animationSpeed;
                }
            } else {
                this.frameX = this.minFrame;
            }
        }
        else if(this.state.isDying && this.state.animation == "death"){
            this.animationSpeed = 50;
            if (this.frameX < this.maxFrame) {
                if(this.counter > 0){
                    this.frameX = this.frameX;
                    this.counter--;
                }
                else{
                    this.frameX++
                    this.counter = this.animationSpeed;
                }
            } else {
                this.destroy();
                this.hpBar.destroy();
            }
        }
    }

    //overwrite the method
    updateMovement(){
        if (this.state.animation === "right") {
            this.speed = Math.abs(this.storeSpeed)
        }
        else if (this.state.animation === "left") {
            this.speed = -Math.abs(this.storeSpeed);
        }
        else if (this.state.animation === "death") {
            this.speed = 0
        }
        else if (this.state.animation === "idleL") {
            this.speed = 0
        }
        else if (this.state.animation === "idleR") {
            this.speed = 0
        }
        // Move the enemy
        this.x += this.speed;
        this.playerBottomCollision = false;
    }

    fireLaser() {
        if (this.laserCounter <= 0) {
            // Logic to fire laser beams downwards
            const laser = {
                x: this.x,
                y: this.y + this.canvasHeight,
                width: 5,
                height: 20,
                speed: 5,
                update: function() {
                    this.y += this.speed;
                },
                draw: function(ctx) {
                    ctx.fillStyle = 'red';
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
            };
            this.lasers = this.lasers || [];
            this.lasers.push(laser);
            this.laserCounter = this.laserCooldown;
        } else {
            this.laserCounter--;
        }
    }

    update() {
        super.update();
        this.updateMovement();
        this.updateFrameX();
        this.fireLaser();
        this.hpBar.updateHpBar(this.currentHp, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }

    //overwrite the method
    collisionAction() {
        if (this.collisionData.touchPoints.other.id === "player") {
            if (this.collisionData.touchPoints.other.right && !this.collisionData.touchPoints.other.bottom) {
                this.x -= 10;
                this.state.direction = "left";
                this.state.animation = "attackL";
                this.speed = 0;
            }
            else if(this.collisionData.touchPoints.other.left && !this.collisionData.touchPoints.other.bottom){
                this.x += 10;
                this.state.direction = "right";
                this.state.animation = "attackR";
                this.speed = 0;
            }
            else if(this.collisionData.touchPoints.other.bottom && this.immune == 0){
                GameEnv.goombaBounce = true;
            }
        }
        else{
            if(this.currentHp < 0){
                this.state.animation = "death";
                if(!this.state.isDying && this.state.animation == "death"){
                    this.frameX = 0;
                }
                this.state.isDying = true;
                GameEnv.invincible = true;
                GameEnv.playSound("goombaDeath");
            }
            else{
                if (GameEnv.playerAttack && (Math.abs((this.x + this.canvasWidth)/2-(GameEnv.x + GameEnv.canvasWidth)/2) < (this.canvasWidth/2 + this.attackRange))) {
                    this.currentHp -= 1;
                }
            }
        }
    }
}
export default Boss;