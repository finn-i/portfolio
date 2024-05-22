import { motion } from "framer-motion";
import styles from "../styles/root.module.css";

const About = () => {

  return (
    <motion.div 
      className={styles.overview}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        hidden: { opacity: 0, scale: 0.5 }
      }}
    >
      <h1>Overview</h1>
      <p>I'm a software developer with experience in front-end web development and digital libraries, based in NZ</p>
    </motion.div>
  )
}

export default About;