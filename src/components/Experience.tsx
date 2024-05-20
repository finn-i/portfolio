import { Tilt } from "react-tilt";
import styles from "../styles/experience.module.css";
import { projects } from "../assets/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion';

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
      {projects.map((project) => (
        <Tilt options={tiltOptions} className={styles.card}>
          <img src={project.img} alt={project.title} />
          <h2>
            {project.title}
            {project.link && 
              <a href={project.link} target="_blank"><FontAwesomeIcon icon={faLink} /></a>
            }
            {project.github && 
              <a href={project.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
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