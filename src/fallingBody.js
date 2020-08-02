class FallingBody extends RigidBody {
    constructor(context, position, size, gravitationalAcceleration, timeOfCreation, maxVerticalTravel){
        super(context, position, size, gravitationalAcceleration, timeOfCreation)
        this.maxVerticalTravel = maxVerticalTravel
    }

    fall(){
        const h = parseInt(0.5 * this.g * Math.pow(this.getTimeElapsed(), 2));
        
            if(this.position.y < window.canvas.height-20){
                this.setY(this.position.y + h);
            } 
         
        this.draw()
    }
}
