import { Tilt } from "react-tilt";
import styles from "../styles/experience.module.css";
import { projects } from "../assets/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion';
import {motionIconHover, motionIconHoverScale} from '../assets/data';
import Icon from "./globals/Icon";

const Experience = () => {

  const tiltOptions = {
    scale: 1.05,
    max: 20,
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
      {projects.map((project, idx) => (
        <Tilt options={tiltOptions} className={styles.card} key={idx}>
          <img src={project.img} alt={project.title} />
          <h2>
            {project.title}
            {project.link && 
              <Icon icon={faLink} target="_blank" href={project.link} size={"sm"} />
            }
            {project.github && 
              <Icon icon={faGithub} target="_blank" href={project.github} size={"sm"} />
            }
          </h2>
          <p>{project.description}</p>
          <div className={styles.stackContainer}>
            {project.stack.map((stack, idx) => {
              return <div key={idx} className={styles.chip}>{stack}</div>;
            })}
          </div>
        </Tilt>
      ))}
    </motion.div>
  );
}

export default Experience;