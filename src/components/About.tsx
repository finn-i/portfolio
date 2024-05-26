import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

type NavProps = {
  rfpRef: any
}

const About: React.FC<NavProps> = ({ rfpRef }) => {

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
      <div className={styles.avatarContainer}>
        <div><img src={"./src/assets/avatar.PNG"} alt="finn" className={styles.avatar} /></div>
        <p>Finn Innes</p>
        <p>NZL</p>
      </div>
      <motion.div className={styles.aboutContent}>
        <h2>About Me</h2>
        <p>A recent MSc graduate and software developer with experience in front-end web development and digital libraries.</p>
        <div className={styles.button} onClick={()=>console.log(rfpRef.current.fullpageApi.moveTo("exp"))}>
          View Experience
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About;