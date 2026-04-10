import React from 'react'
import { motion } from 'motion/react'

const FadeIn = ({ children, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Ensure any Tailwind classes passed to the original section still work
      className={`w-full ${className} `} 
    >
      {children}
    </motion.section>
  )
}

export default FadeIn