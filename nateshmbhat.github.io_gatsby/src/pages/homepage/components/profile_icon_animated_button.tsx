import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { IconButton } from "@material-ui/core"

export const AnimatedProfileIcon = ({
  position,
  icon,
  antiClockRotation = { amount: -30, duration: 2 },
  startScale = 0.3,
  endScale = 1,
  translateDuration = 1,
}: {
  position: { x: number; y: number }
  icon: ReactNode
  antiClockRotation?: { amount: number; duration: number }
  startScale?: number
  endScale?: number
  translateDuration?: 1
}) => {
  return (
    <motion.div
      animate={{
        ...position,
        scale: endScale,
      }}
      initial={{ scale: startScale }}
      transition={{ duration: translateDuration }}
    >
      <span
        className="svg-shadow center-absolute"
        style={{ position: "absolute" }}
      >
        <motion.div
          animate={{ rotate: antiClockRotation.amount }}
          transition={{ duration: antiClockRotation.duration }}
        >
          <Link className="a-nostyle" to="/homepage/homepage">
            <IconButton>{icon}</IconButton>
          </Link>
        </motion.div>
      </span>
    </motion.div>
  )
}
