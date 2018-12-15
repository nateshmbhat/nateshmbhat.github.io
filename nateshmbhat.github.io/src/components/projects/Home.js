import React , {Component} from 'react' ; 
import {Grid} from '@material-ui/core' ; 
import {connect} from 'react-redux' ; 


class HomePage extends Component{
    render(){
        const projects = this.props.projects ; 

        return(
            <>
                <Grid container justify="space-evenly" alignContent="center" alignItems="center" >
                    {projects.map((project , index)=><ProjectCard key={index} style={{flex:1}} {...project}/>)}                
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
                <div className="card m-5 hoverable projectCard" 
                onMouseOver={e=>this.setHover(true)} 
                onMouseLeave={e=>this.setHover(false)}  >

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
                        <a href={props.demoLink} className={`btn btn-primary waves-effect waves-light ${state.hover && 'btn-secondary'}`} >Visit</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log("state = " , state)  
    return{
        projects : state.projects
    }
}

export default connect(mapStateToProps)(HomePage); 