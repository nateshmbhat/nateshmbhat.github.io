import React, { Component } from 'react';
import ProjectHome from './projects/Home';
import HomePage from './homepage/Home';
import EducationHome from './education/Home' ; 
import AchievementsHome from './achievements/Home' ; 
import ProfilesHome from './profiles/Home' ; 
import { Switch, Route } from 'react-router-dom';


class RootHomePage extends Component {
    render() {
        return (<>
            <Switch>
                <Route path="/" exact component={HomePage}/> 
                <Route path="/education" component ={EducationHome} />
                <Route path="/profiles" component ={ProfilesHome} />
                <Route path="/achievements" component ={AchievementsHome} />
                <Route path="/projects" component ={ProjectHome } />
            </Switch>
        </>) ; 
    }
}


export default RootHomePage; 