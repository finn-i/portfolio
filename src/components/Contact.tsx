import styles from '../styles/contact.module.css';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Icon from './globals/Icon';
import Trout from './globals/Trout';

const Contact = () => {

  return (
    <div>
      <motion.div
        className={styles.contactContainer}
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
          <Icon icon={Mail} target="_blank" href={"mailto:finn123890@gmail.com"} />
          <Icon icon={Linkedin} target="_blank" href={"https://www.linkedin.com/in/finn-innes/"} />
          <Icon icon={Github} target="_blank" href={"https://github.com/finn-i"} />
        </div>
      </motion.div>
      <Trout />
    </div>
  )
}

export default Contact;