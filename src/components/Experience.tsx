import { Tilt } from "react-tilt";
import styles from "../styles/experience.module.css";
import { projects } from "../assets/data";
import { Github, Presentation } from "lucide-react";
import { motion } from 'framer-motion';

const Experience = () => {

  const tiltOptions = {
    scale: 1.05,
    max: 20,
  }

  return (
    <>
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
          <Tilt options={tiltOptions} className={styles.card} key={idx} style={{zIndex: 10-idx}}>
            {project.icon}
            {/* <img src={project.img} alt={project.title} /> */}
            <h2>
              {project.title}
            </h2>
            <div className={styles.stackContainer}>
              {project.stack.map((stack, idx) => {
                return <div key={idx} className={styles.chip}>{stack}</div>;
              })}
            </div>
            <p>{project.description}</p>
            {(project.link || project.github) && <div className={styles.links}>
              {project.link && 
                <a className={styles.button} target="_blank" href={project.link}><Presentation size={16}/>Project</a>
              }
              {project.github && 
                <a className={styles.button} target="_blank" href={project.github}><Github size={16}/>Repo</a>
              }
            </div>}
          </Tilt>
        ))}
      </motion.div>
    </>
  );
}

export default Experience;