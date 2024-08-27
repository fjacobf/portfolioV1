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
      className="bg-transparent z-0 overflow-hidden"
      >
        <Component/>
      </motion.section>
    )
}

export default SectionWrapper