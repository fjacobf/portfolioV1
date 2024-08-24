import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
      id={idName}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true, amount: 0.25}}
      className="h-screen bg-transparent"
      >
        <Component/>
      </motion.section>
    )
}

export default SectionWrapper