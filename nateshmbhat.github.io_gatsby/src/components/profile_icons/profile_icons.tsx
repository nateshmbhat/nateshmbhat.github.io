import React from "react"
import { GithubSvg } from "../../static/images/github"
import { ProfileSite } from "../../types/types"

const ProfileIconBuilder = ({profileSite, size = 100} : {profileSite: ProfileSite , size?:number})=>{
    switch (profileSite) {
        case ProfileSite.github:
            return <GithubSvg style={{height : size ,width : size}}/>
        // case ProfileSite.stackoverflow:
        //     return <StackOverflowIcon style={{height : size ,width : size}}/>
        // case ProfileSite.linkedIn:
        //     return <StackOverflowIcon style={{height : size ,width : size}}/>
        // case ProfileSite.stackoverflow:
        //     return <StackOverflowIcon style={{height : size ,width : size}}/>
        // case ProfileSite.stackoverflow:
        //     return <StackOverflowIcon style={{height : size ,width : size}}/>
        // case ProfileSite.stackoverflow:
        //     return <StackOverflowIcon style={{height : size ,width : size}}/>
        // case ProfileSite.stackoverflow:
        //     return <StackOverflowIcon style={{height : size ,width : size}}/>
        // case ProfileSite.stackoverflow:
        //     return <StackOverflowIcon style={{height : size ,width : size}}/>

        default:
            return <GithubSvg style={{height : size ,width : size}}/>
    }
}

export { ProfileIconBuilder}
