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
      return <StackOverFlowSvg style={svgStyle} />

    case ProfileSite.dev:
      return <DevSvg style={svgStyle} />

    case ProfileSite.facebook:
      return <FacebookSvg style={svgStyle} />

    case ProfileSite.instagram:
      return <InstagramSvg style={svgStyle} />

    case ProfileSite.medium:
      return <MediumSvg style={svgStyle} />

    case ProfileSite.hackerrank:
      return <HackerRankSvg style={svgStyle} />

    case ProfileSite.linkedIn:
      return <LinkedInSvg style={svgStyle} />

    case ProfileSite.twitter:
      return <TwitterSvg style={svgStyle} />

    default:
      return <GithubSvg style={svgStyle} />
  }
}

export { ProfileIconBuilder }
