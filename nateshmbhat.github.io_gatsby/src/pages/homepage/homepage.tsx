import React, { Component, ReactNode } from "react"
import {
  GithubIcon,
  FacebookIcon,
  StackOverflowIcon,
} from "../../components/profile_icons/profile_icons"
import { motion } from "framer-motion"
import { AppMathUtil } from "../../utils/app_util"
import { IconButton } from "@material-ui/core"
import { Link } from "gatsby"

const HomePage = () => {
  const allIcons = [
    <GithubIcon size={100} />,
    <GithubIcon size={100} />,
    <GithubIcon size={100} />,
    <GithubIcon size={100} />,
    <GithubIcon size={100} />,
    <GithubIcon size={100} />,
  ]

  const buildAllIcons = (): ReactNode => {
    return allIcons.map((icon, index) => {
      let totalAngle = 360
      let anglePerIcon = totalAngle / allIcons.length
      let maxDistance = 200
      console.log(
        AppMathUtil.getOffsetFromAngle(anglePerIcon * index, maxDistance)
      )
      return (
        <motion.div
          key={index}
          animate={{
            ...AppMathUtil.getOffsetFromAngle(
              anglePerIcon * index,
              maxDistance
            ),
            scale: 1,
          }}
          initial={{ scale: 0.5 }}
          transition={{ duration: 1 }}
        >
          <IconWrapper key={index} index={index}>
            {icon}
          </IconWrapper>
        </motion.div>
      )
    })
  }

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
          {buildAllIcons()}
        </motion.div>
      </div>
    </>
  )
}

const IconWrapper = ({ children, index }) => {
  console.log("children :>> ", children)
  return (
    <>
      <span
        className="svg-shadow center-absolute"
        style={{ position: "absolute" }}
      >
        <motion.div animate={{rotate:-30}} transition={{duration:2}}>
        <Link className="a-nostyle" to="/homepage/homepage">
          <IconButton>{children ?? ""}</IconButton>
        </Link>
        </motion.div>
      </span>
    </>
  )
}

export default HomePage
