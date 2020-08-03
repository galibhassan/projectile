class RigidBody {
    constructor(context, position, size, gravitationalAcceleration, timeOfCreation){
        this.position = position;
        this.g = gravitationalAcceleration;
        this.t0 = timeOfCreation;
        this.t0 = timeOfCreation;
        this.ctx = context;
        this.size = size

        this.draw()
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.size, 0, 2*Math.PI)
        this.ctx.fillStyle = '#1877F2';
        this.ctx.fill()
    }
    getPosition(){
        return this.position;
    }

    setX(newX){
        this.position.x = newX
    }

    setY(newY) {
        this.position.y = newY
    }

    getTimeElapsed(){
        // return (Date.now() - this.t0)/1000
        return (window.globalTime - this.t0)/100
    }
    

}