import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/contact.module.css';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {

  const iconHover = {
    type: "spring", 
    stiffness: 500, 
    damping: 10
  };

  const iconScale = {
    scale: 1.2
  }

  return (
    <motion.div
      className={styles.cardContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        hidden: { opacity: 0, scale: 0.5 }
      }}
      >
      <h1>Contact</h1>
      <p>Drop me an email or message me on my socials</p>
      <div className={styles.socialContainer}>
        <motion.a whileHover={iconScale} transition={iconHover} target="_blank" href={"mailto:finn123890@gmail.com"}>
          <FontAwesomeIcon icon={faAt} size={"2xl"} />
        </motion.a>
        <motion.a whileHover={iconScale} transition={iconHover} target="_blank" href={"https://www.linkedin.com/in/finn-innes/"}>
          <FontAwesomeIcon icon={faLinkedin} size={"2xl"} />
        </motion.a>
        <motion.a whileHover={iconScale} transition={iconHover} target="_blank" href={"https://github.com/finn-i"} >
          <FontAwesomeIcon icon={faGithub} size={"2xl"} />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Contact;