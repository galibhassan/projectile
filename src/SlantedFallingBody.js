class SlantedFallingBody extends RigidBody {
    constructor(context, position, size, gravitationalAcceleration, xSpeed, timeOfCreation, maxVerticalTravel) {
        super(context, position, size, gravitationalAcceleration, timeOfCreation)
        this.maxVerticalTravel = maxVerticalTravel
        this.xSpeed = parseInt(xSpeed*2)
    }

    fall() {
        const h = parseInt(0.5 * this.g * Math.pow(this.getTimeElapsed(), 2));

        if (this.position.y < window.canvas.height - 20) {
            this.setY(this.position.y + h);
            this.setX(this.position.x + this.xSpeed);
        } else {
            this.setY(window.canvas.height-this.size);
        }

        this.draw()
    }
}
