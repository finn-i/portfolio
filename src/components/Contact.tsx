import styles from '../styles/contact.module.css';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Icon from './globals/Icon';
import Trout from './globals/Trout';

type NavProps = {
  rfpRef: any
}

const Contact: React.FC<NavProps> = ({ rfpRef }) => {

  return (
    <div>
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
          <Icon icon={faAt} target="_blank" href={"mailto:finn123890@gmail.com"} size={"2xl"} />
          <Icon icon={faLinkedin} target="_blank" href={"https://www.linkedin.com/in/finn-innes/"} size={"2xl"} />
          <Icon icon={faGithub} target="_blank" href={"https://github.com/finn-i"} size={"2xl"} />
        </div>
      </motion.div>
      <Trout />
    </div>
  )
}

export default Contact;