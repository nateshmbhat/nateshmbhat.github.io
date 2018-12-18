const projects = [
    {
        title: "Multiple Pendulum Simulation",
        imagePath: "/assets/images/projects/simplePendulum.gif",
        demoLink: "/projects/Simple Pendulum/",
        shortDesc: "On and On and On...",
        longDesc: "Simulate the visual effects of multiple user interactive simple pendulums with assumed physical constants."

    },
    {
        title: "Gravity",
        imagePath: "/assets/images/projects/gravity.gif",
        demoLink: "/projects/Gravity/",
        "shortDesc": "So Pull Me Closer",
        longDesc: "Simulation of mutual gravitational force between particles of variable sizes . The particles when collide follow momentum conservation and their colors also combine to form the new combined color."
    },
    {
        title: "Push and Pull",
        imagePath: "/assets/images/projects/Push And Pull.gif",
        demoLink: "/projects/Push and Pull/",
        shortDesc: "A game of mouse and mice :)",
        longDesc: `All objects are attracted to where you point your mouse and will have a beautiful repel effect for every object when mouse button is clicked.`,
    }
]

const achievements = [
    {
        shortDesc: 'Won the IBM sponsored HACKFEST 2k16',
        longDesc: 'Won the IBM sponsored HACKFEST 2k16 which was a state level hackathon and had participants from well known colleges from all over the state.',
        imagePath: '',
    },
    {
        shortDesc: 'Won the IBM sponsored HACKFEST 2k16',
        longDesc: 'Won the IBM sponsored HACKFEST 2k16 which was a state level hackathon and had participants from well known colleges from all over the state.',
        imagePath: '',
    },
    {
        shortDesc: 'Won the IBM sponsored HACKFEST 2k16',
        longDesc: 'Won the IBM sponsored HACKFEST 2k16 which was a state level hackathon and had participants from well known colleges from all over the state.',
        imagePath: '',
    },
    {
        shortDesc: 'Won the IBM sponsored HACKFEST 2k16',
        longDesc: 'Won the IBM sponsored HACKFEST 2k16 which was a state level hackathon and had participants from well known colleges from all over the state.',
        imagePath: '',
    },
    {
        shortDesc: 'Won the IBM sponsored HACKFEST 2k16',
        longDesc: 'Won the IBM sponsored HACKFEST 2k16 which was a state level hackathon and had participants from well known colleges from all over the state.',
        imagePath: '',
    },
]

const profiles = [
    {
        title : 'Github' , 
        link : 'https://github.com/nateshmbhat' ,
        category : 'technical' ,  // one of social , technical , work
        type: 'github'  ,  // one of [facebook , github , hackerrank  , stackoverflow , stackexchange]
    }, 
    {
        title : 'StackOverFlow' , 
        link : 'https://stackoverflow.com/story/nateshmbhat' , 
        category : 'technical' ,  // one of social , technical , work
        type: 'stackoverflow'  ,  // one of [facebook , github , hackerrank ]
    },
{
        title : 'StackOverFlow' , 
        link : 'https://stackoverflow.com/story/nateshmbhat' , 
        category : 'technical' ,  // one of social , technical , work
        type: 'stackoverflow'  ,  // one of [facebook , github , hackerrank ]
    },
{
        title : 'StackOverFlow' , 
        link : 'https://stackoverflow.com/story/nateshmbhat' , 
        category : 'technical' ,  // one of social , technical , work
        type: 'stackoverflow'  ,  // one of [facebook , github , hackerrank ]
    },
]


const initState = {
    projects,
    achievements
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer; 