import { useRef } from "react";
import styles from "../../styles/root.module.css";
import { motion } from "framer-motion";

type TooltipProps = {
  children: React.ReactNode,
  text: string
};

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const tooltipRef = useRef<any>();

  const mouseOver = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = "block";
    }
  }
  
  const mouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = "none";
    }
  }

  return (
    <div className={styles.tooltipContainer} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
      <motion.div className={styles.tooltip} ref={tooltipRef} initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5 }}>        
        {text}
      </motion.div>
      {children}
    </div>
  )
}

export default Tooltip;