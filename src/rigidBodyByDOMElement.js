class RigidBody {
    constructor(shape, color, position, g, t0){
        this.shape = shape || 'circle';
        this.color = color;
        this.position = position;
        const domRef = this.makeCircle()
        this.domRef = domRef;
        //physics
        // h = ut + 1/2 a t^2 
        this.g = g
        this.t0 = t0

        
    }
    
    makeCircle(){
        const circle = document.createElement('div')
        document.body.appendChild(circle)
        circle.style.width = '30px'
        circle.style.height = '30px'
        circle.style.borderRadius = '30px'
        circle.style.background = 'tomato'
        circle.style.position = 'absolute'
        circle.style.top = `${this.position.x}px`
        circle.style.left = `${this.position.y}px`
        return circle
    }

    setX(newX){
        this.position.x = newX
        this.domRef.style.left = this.position.x + 'px'     
    }
    setY(newY){
        this.position.y = newY
        this.domRef.style.top = this.position.y + 'px'
    }

    getElapsedTime(){
        const elapsed = Date.now() - this.t0
        return elapsed
    }

    getYDueToGravity(){
        const updatedY = 0.5 * this.g * Math.pow(this.getElapsedTime(), 2)
        return parseInt(updatedY)
    }

    fall(){
        const currentX = this.position.x
        const currentY = this.position.y
        const xIncrement = 0;
        const yIncrement = 1;
        this.setX(currentX + xIncrement);
        if(this.position.y < 500) {
            this.setY(this.getYDueToGravity());
        } else if(this.position.y > 500){
            this.g = -this.g;
        }
        console.log(this.getYDueToGravity())

    }

}

