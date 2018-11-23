/// <reference path="../assets/js/p5/p5.global-mode.d.ts" />


let mouseDown = 0;
let canvasWidth =  window.innerWidth; 
let canvasHeight = window.innerHeight ; 
let environ;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(100);
    environ = new Environment();
}


function draw() {
    environ.update();
}

function mousePressed(){
    if(mouseX <0 || mouseY < 0 || mouseX> canvasWidth || mouseY > canvasHeight) return ; 

    firstTouch = true ; 
    environ.setMouseLockedFlag(true) ; 
}

function mouseReleased(){
    environ.setMouseLockedFlag(false) ; 
    environ.createMouseBall() ; 
    console.log("mouse releeased" ) ; 
}

// function mouseMoved(){console.log(mouseX , mouseY , canvasWidth , canvasHeight) ; }

class Environment {

    constructor() {
        this.mouseLockedFlag = false; 
        this.objectsArray = new Set() ;  
        this.velocityLimit = 30 ; 
        this.forcesArray = [] ;
        this.totalAreaOfObjects = 0 ;
        this.boundLeft = 1;
        this.boundRight = canvasWidth-1 ;
        this.mouseBall = new MouseBall() ; 
        this.boundTop = 0 ;
        this.boundBottom = canvasHeight -100 ;
        this.gravitationalAcceleration = new createVector(0  , 0.1)  ; 
        this.gravityEnabledFlag = false ; 
        this.G = 0.5 ; 
    }

    setMouseLockedFlag(status){this.mouseLockedFlag = status; }

    update() {
        background(255) ; 
        push();
        stroke(0) ;
        rect(0,0,this.boundRight, this.boundBottom) ; 
        pop() ; 
        this.forcesArray.forEach(force=>{
            this.applyForce(force) ; 
        })
        if(this.gravityEnabledFlag) this.applyGravity() ; 
        this.G = Number($("input[name=G]")[0].value) ; 
        this.updateAndShowAllBalls();
        
        if(this.mouseLockedFlag){
            console.log("Drawing") ; 
            this.mouseBall.updateAndShow() ; 
        }
        this.handleCanvasResize() ; 
    }

    createMouseBall(){
        let ball = new Ball(mouseX , mouseY , this.mouseBall.radius , environ) ; 
        ball.setColor(this.mouseBall.colorR , this.mouseBall.colorG , this.mouseBall.colorB) ; 
        this.addBall(ball) ; 
        this.mouseBall = new MouseBall() ; 
    }

    handleCanvasResize(){
        if(this.totalAreaOfObjects> canvasHeight*canvasWidth*0.1)        
        {
            canvasHeight *= 1.7 ; 
            canvasWidth *= 1.7 ; 
            this.boundRight = canvasWidth ; 
            this.boundBottom = canvasHeight; 
            resizeCanvas(canvasWidth , canvasHeight) ; 
        }
    }


    addBall(ball) {
        ball.setVelocityLimit(this.velocityLimit) ; 
        this.totalAreaOfObjects+=ball.radius*PI*ball.radius ;
        this.objectsArray.add(ball);
    }

    updateAndShowAllBalls() {
        this.objectsArray.forEach(ball => ball.updateAndShow());
    }

    showAllBalls() {
        this.objectsArray.forEach(ball => ball.show());
    }

    applyGravity(){
        this.objectsArray.forEach(ball=>ball.applyGravity()) ; 
    }


    applyGravitationalForce(){
        this.objectsArray.forEach(ball.applyGravitationalForce()) ; 
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
        this.dampeningFactor = 0.99;
        this.mutualGravityFlagEnabled = true ; 
    }

    updateAndShow() {
        this.update();
        this.show();
    }

    update() {
        this.handleEnvironmentBound();
        this.vel.limit(this.velocityLimit) ; 
        this.loc.add(this.vel);
        if(this.mutualGravityFlagEnabled) this.applyGravitationalForce() ;
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    handleEnvironmentBound() {
        if ((this.loc.x - this.radius) < this.environment.boundLeft) {
            this.vel.x = abs(this.vel.x);
            this.vel.x *= this.dampeningFactor;
        }

        if (this.loc.x + this.radius  > this.environment.boundRight) {
            this.vel.x = -1 * abs(this.vel.x);
            this.vel.x *= this.dampeningFactor;
        }

        if (this.loc.y - this.radius  < this.environment.boundTop) {
            this.vel.y = abs(this.vel.y);
            this.vel.y *= this.dampeningFactor;
        }

        if (this.loc.y+ this.radius > this.environment.boundBottom) {
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

    applyGravity(){
        // Only gravity of Earth not mutual
        this.acc.add(this.environment.gravitationalAcceleration) ; 
    }


    handleGravitationalCollision(object){
        let larger , smaller   ;  
        if(this.radius > object.radius){
            this.radius += object.radius/2 ; 
            larger = this ; smaller = object ; 
        }
        else{
            object.radius+=this.radius/2 ; 
            larger = object ; smaller = this ; 
        }

        this.environment.totalAreaOfObjects-= (this.radius**2*PI +object.radius**2*PI) ; 
        
        larger.colorR = larger.colorR - (larger.colorR - smaller.colorR)/2
        larger.colorG = larger.colorG - (larger.colorG - smaller.colorG)/2
        larger.colorB = larger.colorB - (larger.colorB - smaller.colorB)/2

        this.environment.objectsArray.delete(smaller) ; 
        this.environment.totalAreaOfObjects+=larger.radius**2*PI ; 

        this.vel.add(p5.Vector.div(smaller.vel.mult(smaller.radius)  , this.radius)) ;

        return ; 
    }

    applyGravitationalForce(){
       this.environment.objectsArray.forEach(object=>{
           if(object!=this){
               let dist = p5.Vector.sub(this.loc ,object.loc) ; 
                if(dist.mag()*1.5 < (object.radius + this.radius))
                {
                    this.handleGravitationalCollision(object) ; 
                    return ; 
                }

               let distSquared  = dist.magSq() ; 
               dist.normalize() ; 
               dist.mult(-this.radius * object.radius * this.environment.G ) ; 
               dist.div(distSquared) ; 
               this.acc.add(dist) ; 
           }
       }) 
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
    setColor(r , g , b){
        this.colorR = r ; 
        this.colorG = g ; 
        this.colorB = b ; 
    }

    setAcceleration(x, y) {
        this.acc.x = x; this.acc.y = y;
    }
}


class MouseBall{
    constructor(){
        this.mouseLockedFlag = false; 
        this.radius = 1.5 ; 
        this.radiusStep  = 0.25 ;
        this.colorR = random(0,255) ; 
        this.colorG = random(0,255) ; 
        this.colorB = random(0,255) ; 
    }

    setMouseLockedFlag(status){this.mouseLockedFlag = status ; }

    update(){
        this.radius+=this.radiusStep ; 
    }
    updateAndShow(){this.update() ; this.show() ; }

    show(){
        push() ; 
        fill(this.colorR , this.colorG , this.colorB , 100) ; 
        ellipse(mouseX ,mouseY , this.radius*2 , this.radius*2) ; 
        pop() ; 
    }
}