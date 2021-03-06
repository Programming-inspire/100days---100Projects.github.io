const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const scores = document.querySelector('#scoreid');
const startgame = document.querySelector('#startgame');
const model = document.querySelector('#model');
const bigscore = document.querySelector('#bigscore')

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius  
        this.color  = color 
    }

    darw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

class Projectile{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    darw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update(){
        this.darw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Enemy{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    darw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update(){
        this.darw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}
const x = canvas.width / 2
const y = canvas.height / 2

let player = new Player(x, y, 10, 'white');
let projectiles = []
let enemies = []

function init(){
     player = new Player(x, y, 10, 'white');
     projectiles = []
     enemies = []
     score = 0
     scores.innerHTML = score
     bigscore.innerHTML = score
}

function spawnEnemies(){
    setInterval(() =>{
        const radius = Math.random() * (30 - 4) + 4
        let x
        let y
        if(Math.random() < 0.5)
        {
         x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
         y = Math.random() * canvas.height
        }
        else{
         x = Math.random() * canvas.width
         y =Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`
        const angle = Math.atan2(
            canvas.height / 2 - y,
            canvas.width / 2 - x
        )
        const velocity = {
            x: Math.cos(angle) * 4,
            y: Math.sin(angle) * 4
        }
        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 1000)
}
let animationId
let score = 0
function animate(){
    animationId = requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.darw()
    projectiles.forEach((projectile, index) =>{
        projectile.update()

        if(projectile.x - projectile.radius < 0
        || projectile.x -  projectile.radius > canvas.width 
        || projectile.y + projectile.radius < 0 ||
        projectile.y - projectile.radius > canvas.height)
        {
            setTimeout(() =>{
                projectiles.splice(index, 1)
            },0) 
        }
    })

    enemies.forEach((enemy, index) => {
        enemy.update()

        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
        if(dist - enemy.radius - player.radius < 1)
            {
             cancelAnimationFrame(animationId)
             model.style.display = 'flex'
             bigscore.innerHTML = score
            }

        projectiles.forEach((projectile, projectileIndex) =>{
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

            if(dist - enemy.radius - projectile.radius < 1)
            {
                //score
                score += 100;
               scores.innerHTML = score;

                setTimeout(() =>{
                    enemies.splice(index, 1)
                    projectiles.splice(projectileIndex, 1)
                },0)
                
            }
        })
    })
}

window.addEventListener('click', (event) =>{
    const angle = Math.atan2(
        event.clientY - canvas.height / 2,
        event.clientX - canvas.width / 2
    )
    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
    }
    
    projectiles.push(new Projectile(
        canvas.width / 2,
        canvas.height / 2,
        5,
        'white',
         velocity
    ))
    
})

startgame.addEventListener('click', () =>{
    init();
    animate();
    spawnEnemies()
    model.style.display = 'none'
})



