import React , {Component} from 'react' ; 
import {Grid} from '@material-ui/core' ; 


class HomePage extends Component{
    render(){

        let projects=[
            {
                title : "Multiple Pendulum Simulation" ,
                imagePath : "/assets/images/simplePendulum.gif" , 
                link : "/projects/Simple Pendulum/" , 
                oneLineDesc :  "On and On and On..." , 
                description : "Simulate the visual effects of multiple user interactive simple pendulums with assumed physical constants." 

            },
            {
                title : "Gravity" , 
                imagePath : "/assets/images/gravity.gif",
                link  : "/projects/Gravity/" , 
                "oneLineDesc" :  "So Pull Me Closer" , 
                description : "Simulation of mutual gravitational force between particles of variable sizes . The particles when collide follow momentum conservation and their colors also combine to form the new combined color."
            },
            {
                title : "Push and Pull" , 
                imagePath : "/assets/images/Push And Pull.gif" , 
                link : "/projects/Push and Pull/" , 
                oneLineDesc :  "A game of mouse and mice :)" , 
                description : `All objects are attracted to where you point your mouse and will have a beautiful repel effect for every object when mouse button is clicked.` , 
            }
        ]


        return(
            <>
                <Grid container justify="space-evenly" alignContent="center" alignItems="center" >
                    {projects.map(project=><ProjectCard {...project}/>)}                
                </Grid>
            </>
        );
    }
}


class ProjectCard extends Component{
    state={
        hover : false , 
    }
    setHover(value){
        this.setState({...this.state, hover : value})
    }
    render(){
        const props = this.props ;
        let hoverStyle={
                    transition:"all 0.3s",
                    color:"white" , 
                    backgroundColor:"rgb(24,24,24)",
                    boxShadow:"20px 10px 45px black" , 
                } ;

        let state = this.state  ;

        return ( 
            <div className="col col-xl-4 col-lg-6 col-sm-12 col-12">
                <div className="card m-5 hoverable" 
                onMouseOver={e=>this.setHover(true)} 
                onMouseLeave={e=>this.setHover(false)}  
                style={state.hover && hoverStyle || {}} >

                    {/* <!-- Card image --> */}
                    <div className="view overlay">
                        <img className="card-img-top" src={props.imagePath} alt="Card image cap"/>
                        <a href="#!">
                            <div className="mask rgba-white-slight waves-effect"></div>
                        </a>
                    </div>

                    {/* <!-- Card content --> */}
                    <div className="card-body text-center">

                        {/* <!-- Title --> */}
                        <h4 className="card-title">{props.title}</h4>
                        {/* <!-- Text --> */}
                        {props.oneLineDesc && <p className="card-text">{props.oneLineDesc}</p>}
                        <p className="card-text"> { props.description} </p>
                        {/* <!-- Button --> */}
                        <a href={props.link} className={`btn btn-primary waves-effect waves-light ${state.hover && 'btn-secondary'}`} >Visit</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default HomePage ; 