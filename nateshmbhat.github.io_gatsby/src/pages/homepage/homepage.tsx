import React, { Component, ReactNode } from "react"
import { ProfileIconBuilder } from "../../components/profile_icons/profile_icons"
import { motion } from "framer-motion"
import { AppMathUtil } from "../../utils/app_util"
import { AnimatedProfileIcon } from "./components/profile_icon_animated_button"
import { ProfileSite } from "../../types/types"

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "mediumpurple",
          height: "100vh",
        }}
      >
        <motion.div
          animate={{ rotate: 30 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <CircularAnimatedProfileIcons />
        </motion.div>
      </div>
    </>
  )
}

const CircularAnimatedProfileIcons = () => {
  const allIcons = [
    ProfileSite.github,
    ProfileSite.facebook,
    ProfileSite.dev,
    ProfileSite.hackerrank,
    ProfileSite.twitter,
    ProfileSite.youtube,
    ProfileSite.instagram,
    ProfileSite.linkedIn,
    ProfileSite.stackoverflow,
    ProfileSite.medium,
  ].map(site => <ProfileIconBuilder profileSite={site} />)

  return (
    <>
      {allIcons.map((icon, index) => {
        let anglePerIcon = 360 / allIcons.length
        let maxDistance = 200
        let iconPosition = AppMathUtil.getOffsetFromAngle(
          anglePerIcon * index,
          maxDistance
        )
        return <AnimatedProfileIcon position={iconPosition} icon={icon} />
      })}
    </>
  )
}

export default HomePage
