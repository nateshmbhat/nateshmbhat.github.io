
    totalheight = 800;
let mouseDown = 0;
let canvasWidth = window.innerWidth ; 
let canvasHeight = window.innerHeight ; 

let mobileDevice ; 
if(canvasWidth<700) mobileDevice = true ; 

let totalBalls  = 175 ; 

console.log(canvasWidth , canvasHeight) ; 
let environ;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1000);
    fill(200, alpha = 100);
    environ = new Environment();
    environ.addForce(new createVector(0 , 10)) ; 

    if(mobileDevice)totalBalls = 40 ; 

    for (let i = 0; i < totalBalls ; i++)
    {
        environ.addBall(new Ball(random(30, canvasWidth), random(30, canvasHeight), random(5 , 50 ), environ));
    }
}


function draw() {
    background(255);
    environ.update();
}



class Environment {

    constructor() {
        this.objectsArray = [];
        this.forcesArray = [] ;
        this.boundLeft = 20;
        this.boundRight = canvasWidth - 30;
        this.boundTop = 0 ;
        this.boundBottom = canvasHeight - 50 ;
        this.speedLimit = 15 ; 
        if(mobileDevice)this.speedLimit = 10 ; 
        console.log(this.boundLeft , this.boundRight , this.boundTop , this.boundBottom) ; 
    }


    update() {
        push() ; 
        fill(255) ; 
        rect(this.boundLeft, this.boundTop, this.boundRight, this.boundBottom);
        if(mouseIsPressed){
            fill(0,0) ;
            stroke(40 ,200)
            ellipse(mouseX , mouseY , 10 , 10 ) ; 
            stroke(100 , 30  , 200 , 100) ; 
            ellipse(mouseX , mouseY , 30 , 30 ) ; 
            stroke(74 , 100 , 50 , 100 )
            ellipse(mouseX , mouseY , 50 , 50 ) ; 
        }
        pop() ; 
        this.forcesArray.forEach(force=>{
            this.applyForce(force) ; 
        })
        this.updateAndShowAllBalls();
    }



    addBall(ball) {
        ball.setVelocityLimit(this.speedLimit) ; 
        this.objectsArray.push(ball);
    }

    updateAndShowAllBalls() {
        this.objectsArray.forEach(ball => ball.updateAndShow());
    }

    showAllBalls() {
        this.objectsArray.forEach(ball => ball.show());
    }

    addForce(force) {
        this.forcesArray.push(force) ; 
    }
    applyForce(force) {
        this.objectsArray.forEach(ball => ball.applyForce(force))
    }
}



class Ball {

    constructor(x, y, radius, environment) {
        this.environment = environment;
        this.radius = radius;
        this.colorR =  random(255) ; this.colorG = random(255) ; this.colorB = random(255) ; 
        this.colorAlpha = 100 ; 
        this.loc = new createVector(x, y);
        this.velocityLimit = Number.POSITIVE_INFINITY;
        this.vel = new createVector(0, 0);
        this.acc = new createVector(0, 0);
        this.dampeningFactor = 0.90;
    }

    updateAndShow() {
        this.update();
        this.show();
    }

    update() {
        this.handleEnvironmentBound();
        this.vel.limit(this.velocityLimit) ; 
        this.loc.add(this.vel);
        
        this.acc = this.getAccelerationFromMouse() ; 
        if(mouseIsPressed) this.acc.mult(-1) ; 

        this.vel.add(this.acc) ; 

        this.acc.mult(0);
    }

    getAccelerationFromMouse(){
        let constant = 100 ; 
        let mouseToBall = p5.Vector.sub( this.loc , new createVector(mouseX , mouseY) )  ; 
        let direction = mouseToBall.normalize() ;  //Ball to mouse
        let finalAcceleraiton = p5.Vector.div( direction.mult(constant)  , mouseToBall.mag()) ; 
        return finalAcceleraiton.mult(-1)  ;  
    }


    handleEnvironmentBound() {
        if ((this.loc.x - this.radius) < this.environment.boundLeft) {
            this.vel.x = abs(this.vel.x);
            this.vel.x *= this.dampeningFactor;
        }

        if (this.loc.x + this.radius > this.environment.boundRight) {
            this.vel.x = -1 * abs(this.vel.x);
            this.vel.x *= this.dampeningFactor;
        }

        if (this.loc.y - this.radius  < this.environment.boundTop) {
            this.vel.y = abs(this.vel.y);
            this.vel.y *= this.dampeningFactor;
        }

        if (this.loc.y + this.radius > this.environment.boundBottom) {
            this.vel.y = -1 * abs(this.vel.y);
            this.vel.y *= this.dampeningFactor;
        }
    }

    show() {
        push() ; 
        fill(this.colorR , this.colorG , this.colorB , this.colorAlpha ) ; 
        ellipse(this.loc.x, this.loc.y, this.radius * 2, this.radius * 2);
        
        pop() ;
    }

    applyForce(force) {
        this.acc.add(p5.Vector.div(force , this.radius));
    }
    setVelocityLimit(lim) {
        this.velocityLimit = lim;
    }
    setAcceleration(acc) {
        this.acc = acc;
    }

    setAcceleration(x, y) {
        this.acc.x = x;
        this.acc.y = y;
    }
}