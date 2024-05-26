import { Tilt } from "react-tilt";
import styles from "../styles/experience.module.css";
import { projects } from "../assets/data";
import { Link, Code } from "lucide-react";
import { motion } from 'framer-motion';
import Icon from "./globals/Icon";
import Tooltip from "./globals/Tooltip";

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
          <Tilt options={tiltOptions} className={styles.card} key={idx}>
            {(project.link || project.github) && <div className={styles.links}>
              {project.link && 
                <Tooltip text={"View Site"}><Icon icon={Link} target="_blank" href={project.link} /></Tooltip>
              }
              {project.github && 
                <Tooltip text={"View Repo"}><Icon icon={Code} target="_blank" href={project.github} /></Tooltip>
              }
            </div>}
            <img src={project.img} alt={project.title} />
            <h2>
              {project.title}
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
    </>
  );
}

export default Experience;