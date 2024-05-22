import { motion } from 'framer-motion';
import styles from '../styles/root.module.css';

const Home = () => {

  return (
    <motion.div 
      className={styles.title} 
      initial={{ y: 100, opacity: 0, scale: 0 }} 
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
    >
      FINN INNES
    </motion.div>
  );
}

export default Home;