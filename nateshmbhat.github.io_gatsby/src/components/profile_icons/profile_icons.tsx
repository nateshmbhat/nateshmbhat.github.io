import React from "react"
import { GithubSvg } from "../../static/images/github"
import { StackOverFlowSvg } from "../../static/images/stackoverflow"
import { FacebookSvg } from "../../static/images/facebook"
import { DevSvg } from "../../static/images/dev"
import { MediumSvg } from "../../static/images/medium"
import { HackerRankSvg } from "../../static/images/hackerrank"
import { LinkedInSvg } from "../../static/images/linkedin"
import { InstagramSvg } from "../../static/images/instagram"
import { TwitterSvg } from "../../static/images/twitter"
import { YoutubeSvg } from "../../static/images/youtube"
import { ProfileSite } from "../../types/types"

const ProfileIconBuilder = ({
  profileSite,
  size = 100,
}: {
  profileSite: ProfileSite
  size?: number
}) => {
  const svgStyle = { height: size, width: size }

  switch (profileSite) {
    case ProfileSite.github:
      return <GithubSvg style={svgStyle} />

    case ProfileSite.stackoverflow:
      return <span
          style={{
            ...svgStyle ,  
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StackOverFlowSvg style={{ height: 85, width: 85 }} />
        </span>

    case ProfileSite.dev:
      return <DevSvg style={svgStyle} />

    case ProfileSite.facebook:
      return <FacebookSvg style={{ ...svgStyle, fill: "rgb(64,101,174)" }} />

    case ProfileSite.instagram:
      return <span
          style={{
            ...svgStyle ,  
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InstagramSvg style={{ height: 85, width: 85}} />
        </span>


    case ProfileSite.medium:
      return (
        <span
          style={{
            ...svgStyle ,  
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MediumSvg style={{ height: 85, width: 85 }} />
        </span>
      )

    case ProfileSite.hackerrank:
      return <HackerRankSvg style={{ ...svgStyle, fill: "forestgreen" }} />

    case ProfileSite.linkedIn:
        return <span
          style={{
            ...svgStyle ,  
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LinkedInSvg style={{ height: 85, width: 85 , fill : 'rgb(1,126,180)' }} />
        </span>

    case ProfileSite.twitter:
      return <TwitterSvg style={{ ...svgStyle, fill: "deepskyblue" }} />

    case ProfileSite.youtube:
      return <YoutubeSvg style={{ ...svgStyle, fill: "red" }} />

    default:
      return <GithubSvg style={svgStyle} />
  }
}

export { ProfileIconBuilder }
