
import React from 'react' ; 
import { GithubSvg } from "../../static/images/github"

const GithubIcon = ({size}:{size?:number })=>{
    size = size ?? 50 ; 
    return <GithubSvg style={{height : size ,width : size}}/>
}

const StackOverflowIcon = ()=>{
    return <GithubSvg style={{}}/>
}

const FacebookIcon = ()=>{
    return <GithubSvg style={{}}/>
}

export {GithubIcon , StackOverflowIcon , FacebookIcon}