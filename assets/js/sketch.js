/// <reference path="p5/p5.global-mode.d.ts" />

let totalwidth = 1000,
    totalheight = 700;
let mouseDown = 0;
let canvasWidth  = document.body.clientWidth ; 
let canvasHeight = document.body.clientHeight ; 
let pendulumHandler;

function setup() {
    createCanvas(canvasWidth, canvasHeight + 400);
    frameRate(100);
    strokeWeight(2);
    pendulumHandler = new PendulumHandler();
}

function draw() {
    background(255);
    fill(random(255) , random(255) , random(255));
    pendulumHandler.updateAll();
}

function mouseDragged() {
    pendulumHandler.handleMouseDrag(mouseX, mouseY);
}

function mousePressed() {
    pendulumHandler.handleMousePress(mouseX, mouseY);
}

function mouseReleased() {
    pendulumHandler.handleMouseRelease(mouseX, mouseY);
}



class PendulumHandler {

    constructor() {
        //Default values ; 
        this.originx = canvasWidth/2  ;
        this.originy = 350  ;
        this.mass = 0.3 ; this.length = 150 ; this.radius = 35 ; 
        this.pauseAllFlag = false;
        this.pendulumArray = new Array();
        this.pendulumArray.push(new Pendulum(this.originx, this.originy, this.length, this.radius, this.mass ));


        $('#addbtn').on('click', e=>{
           this.addPendulum(this.getInputParams()) ;  
        })
        
        $('#removebtn').on('click' ,e=>{
            this.removePendulum() ; 
        })
        
        $('#resetbtn').on('click' , e=>{
            this.resetAll() ; 
        })

        $("input[name='gravity']").on('mousemove' , e=>{
            console.log("mousemove") ; 
            if(mouseDown)
                this.setGravity($("input[name='gravity']")[0].value) ; 
        })
    }

    setGravity(gravity){
        this.pendulumArray.forEach(pend=>{pend.setGravity(gravity);})        
    }

    getInputParams(){
        return {
        length : $("input[name='length']")[0].value ,
         mass:$("input[name='mass']")[0].value , 
         radius:$("input[name='radius']")[0].value , 
         originx :$("input[name='originx']")[0].value , 
         originy :$("input[name='originy']")[0].value ,
        }
    }

    resetAll(){
        while(this.pendulumArray.length>0) delete this.pendulumArray.pop() ; 


        $("input[name='length']")[0].value = "" ; 
        $("input[name='mass']")[0].value ="" ; 
        $("input[name='radius']")[0].value = "" ; 
        $("input[name='originx']")[0].value = "" ; 
        $("input[name='originy']")[0].value = "" ;

        this.pendulumArray.push(new Pendulum(this.originx , this.originy , this.length , this.radius  , this.mass)) ; 
    }

    removePendulum(){
        this.pendulumArray.pop() ;
    }


    

    addPendulum({originx = 500, originy = 350, length = 150, radius = 35 , mass = 3 } ) {

        if((originy+length + radius > canvasHeight ) || (originx+length + radius > this.canvasWidth))
        {
           if(originy+ length+ radius > this.canvasHeight){ this.canvasHeight = originy+ length+ radius ; resizeCanvas(this.canvasWidth , this.canvasHeight) ; }
           if(originx+ length+ radius > this.canvasWidth)  {this.canvasWidth = originx + length + radius ; resizeCanvas(this.canvasWidth , this.canvasHeight) ; }
        }

        console.log(Number(originx) || this.originx, Number(originy) || this.originy, Number(length)||this.length, Number(radius)||this.radius, Number(mass)||this.mass) ; 


        this.pendulumArray.push(new Pendulum(Number(originx) || this.originx, Number(originy) || this.originy, Number(length)||this.length, Number(radius)||this.radius , Number(mass)||this.mass)) ; 
    }

    pauseAll() {
        this.pauseAllFlag = true;
    }

    updateAll() {
        this.pendulumArray.forEach(pend => {
            pend.update();
        })
    }

    updatePendulum(index) {
        this.pendulumArray[index].update();
    }

    handleMouseDrag(x, y) {
        this.pendulumArray.forEach(pend => {
            pend.handleMouseDrag(x, y);
        })
    }

    handleMousePress(x, y) {
        for(let i = this.pendulumArray.length -1 ; i>=0  ; i--)
        {
            if(this.pendulumArray[i].handleMousePress(x, y))
                break ; 
        }
    }

    handleMouseRelease(x, y) {
        this.pendulumArray.forEach(pend => {
            pend.handleMouseRelease(x, y);
        })
    }

}


class Pendulum {

    constructor(originx, originy, length, radius , mass) {
        this.length = 150, this.angle = PI / 2;
        this.angVel = 0, this.angAcc = 0;
        this.mass = mass;
        this.numberOfRotations = 0 ; 
        this.g = 1;

        this.stopUpdatingflag = false;
        this.mouseLockedFlag = false;

        this.origin = new createVector(originx, originy);
        this.bob = new createVector(originx, originy + length);
        this.radius = radius;
        this.length = length;
    }


    update() {

        line(this.origin.x-5 ,this.origin.y, this.origin.x+5  , this.origin.y) ;
        line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
        ellipse(this.bob.x, this.bob.y, this.radius, this.radius);

        if (this.stopUpdatingflag == true) {
            return;
        }
        this.bob.x = this.origin.x + this.length * sin(this.angle);
        this.bob.y = this.origin.y + this.length * cos(this.angle);

        this.angAcc =  - this.mass * this.g/this.length * sin(this.angle);
        this.angle += this.angVel;
        this.angVel += this.angAcc;

        this.angVel *=0.997 ; 
    }


    getStopUpdatingFlag() {
        return this.stopUpdatingflag;
    }


    distance(x2, y2, x1, y1) {
        return sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }

    handleCanvasResize(){
        //call this on mouseRelease
        canvasHeight = max(this.length + this.radius + this.origin.y ,canvasHeight ) ; 
        canvasWidth = max(this.length + this.radius + this.origin.x , canvasWidth) ;  
        resizeCanvas(canvasWidth , canvasHeight) ; 
    }


    handleMouseDrag(x, y) {
        if (!this.mouseLockedFlag) return;

        if (this.mouseLockedFlag) {
            this.stopUpdatingflag = true;
            this.angVel = 0;
            this.angAcc = 0;
            this.setBob(x, y);
            this.length = dist(this.bob.x, this.bob.y, this.origin.x, this.origin.y);
        }
    }


    handleMousePress(x, y) {
        console.log("x = " , x) ; 
        console.log("bob.x = " , this.bob.x) ; 
        console.log("radius = " , this.radius) ; 
        console.log(abs(x - this.bob.x))
        if ((abs(x - this.bob.x) <= this.radius/2 && abs(y - this.bob.y) <= this.radius/2)) {
            this.mouseLockedFlag = true;
            this.handleMouseDrag(x, y);
            return true ; 
        }
        else{
            return false ; 
        }
    }


    handleMouseRelease(x, y) {
        if(this.mouseLockedFlag)
        {
            this.handleCanvasResize() ; 
            this.handleMouseDrag(x, y);
            this.stopUpdatingflag = false;
            this.angle = atan((this.bob.x - this.origin.x) / (this.bob.y - this.origin.y));
            if (this.bob.y < this.origin.y) this.angle += PI;
            this.mouseLockedFlag = false;
        }
    }


    resetPendulum() {
        this.angle = 0;
        this.angVel = 0;
    }

    setMass(mass) {
        this.mass = mass;
    }

    setRadius(mass) {
        this.radius = mass;
    }

    setLength(mass) {
        this.length = mass;
    }

    getLength() {
        return this.length;
    }

    setGravity(mass) {
        this.g = mass;
    }

    setAngularVelocity(mass) {
        this.angVel = mass;
    }

    setAngularAcceleration(mass) {
        this.angAcc = mass;
    }

    setBob(x, y) {
        this.bob.x = x;
        this.bob.y = y;
        line(474, 349, 524, 349);
        line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
        ellipse(this.bob.x, this.bob.y, this.radius, this.radius);
    }

    setOrigin(x, y) {
        this.origin.x = x;
        this.origin.y = y;
    }
}



document.body.onmousedown = function() { 
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}