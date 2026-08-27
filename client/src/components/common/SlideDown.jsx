import React from 'react'
import { motion } from 'motion/react'

const FadeIn = ({ children, className }) => {
  return (
    <motion.section
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Ensure any Tailwind classes passed to the original section still work
      className={`w-full ${className} `} 
    >
      {children}
    </motion.section>
  )
}

export default FadeIn