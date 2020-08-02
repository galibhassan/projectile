window.globalTime = 0;
window.mouseDownTime = 0;
window.mouseState = ''


window.canvas = document.getElementById('mainCanvas');
canvas.width = window.innerWidth*.75
canvas.height = window.innerHeight*.75
ctx = canvas.getContext('2d');

speedBar = document.getElementsByClassName('speedBar')[0]
speedBar.style.maxWidth = canvas.width + 'px'

let ballsAll = []

canvas.addEventListener('pointerup', function(e){
    window.mouseState = 'pointerup'
    console.log(e.offsetX, e.offsetY)
    if(e.which === 3){
        e.preventDefault();
        rb = new FallingBody(ctx, {x:e.offsetX, y:e.offsetY}, 10, 700, window.globalTime, canvas.height);
        ballsAll.push(rb)
    } else if(e.which === 1){
        const xSpeed = window.mouseDownTime/10;
        sfb = new SlantedFallingBody(ctx, {x:e.offsetX, y:e.offsetY}, 10, 700, xSpeed, window.globalTime, canvas.height,);
        window.mouseDownTime = 0;
        ballsAll.push(sfb)
    }
})

canvas.addEventListener('pointerdown', (e)=>{
    window.mouseState = 'pointerdown'
})


const update = (rb)=>{

    if(window.mouseState === 'pointerdown') {
        window.mouseDownTime += 1
        speedBar.style.width = `${window.mouseDownTime*5}px`
        console.log(window.mouseDownTime)
    }


    ctx.clearRect(0,0, canvas.width, canvas.height)
    ballsAll.forEach(ball=>{
        ball.fall()
    })
    window.globalTime += 1;
    requestAnimationFrame(update)
}

update()