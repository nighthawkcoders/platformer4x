import Background from './Background.js';

export class BackgroundSnowfall extends Background {
    constructor(canvas, image, data) {
        super(canvas, image, data);
        this.snowflakes = [];
        this.snowflakeImage = new Image();
        this.snowflakeImage.src = '/images/platformer/backgrounds/beefall.png'; // Correct path to the image
        this.snowflakeImage.onload = () => {
            console.log('Snowflake image loaded successfully');
            this.createSnowflakes();
        };
        this.snowflakeImage.onerror = (error) => {
            console.error('Failed to load snowflake image:', error);
            console.error('Image source:', this.snowflakeImage.src);
        };
    }

    createSnowflakes() {
        for (let i = 0; i < 75; i++) { // Number of snowflakes
            this.snowflakes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.0 + 0.25, // Size of snowflakes
                speed: Math.random() * 0.5 + 0.2 // Speed of snowflakes
            });
        }
    }

    update() {
        for (let flake of this.snowflakes) {
            flake.y += flake.speed;
            if (flake.y > this.canvas.height) {
                flake.y = 0;
                flake.x = Math.random() * this.canvas.width;
            }
        }
        super.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let flake of this.snowflakes) {
            if (this.snowflakeImage.complete) {
                this.ctx.drawImage(this.snowflakeImage, flake.x, flake.y, flake.radius * 2, flake.radius * 2);
            } else {
                // Draw a placeholder circle if the image is not loaded
                this.ctx.beginPath();
                this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = 'white';
                this.ctx.fill();
            }
        }
        super.draw();
    }
}

export default BackgroundSnowfall;