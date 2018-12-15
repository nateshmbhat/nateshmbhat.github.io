const projects=[
    {
        title : "Multiple Pendulum Simulation" ,
        imagePath : "/assets/images/projects/simplePendulum.gif" , 
        demoLink : "/projects/Simple Pendulum/" , 
        oneLineDesc :  "On and On and On..." , 
        description : "Simulate the visual effects of multiple user interactive simple pendulums with assumed physical constants." 

    },
    {
        title : "Gravity" , 
        imagePath : "/assets/images/projects/gravity.gif",
        demoLink  : "/projects/Gravity/" , 
        "oneLineDesc" :  "So Pull Me Closer" , 
        description : "Simulation of mutual gravitational force between particles of variable sizes . The particles when collide follow momentum conservation and their colors also combine to form the new combined color."
    },
    {
        title : "Push and Pull" , 
        imagePath : "/assets/images/projects/Push And Pull.gif" , 
        demoLink : "/projects/Push and Pull/" , 
        oneLineDesc :  "A game of mouse and mice :)" , 
        description : `All objects are attracted to where you point your mouse and will have a beautiful repel effect for every object when mouse button is clicked.` , 
    }
]


const initState = {
    projects , 
}

const rootReducer = (state = initState , action)=>{
    return state ; 
}

export default rootReducer ; 