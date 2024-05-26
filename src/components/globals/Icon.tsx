import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import styles from "../../styles/root.module.css";

type IconProps = {
  icon: LucideIcon,
  target?: string,
  href?: string,
  size?: number,
  color?: string  
}

const Icon: React.FC<IconProps> = ({ icon: LucideIcon, target, href, size=26, color="#F0EDCC" }) => {

  const transition = {
    type: "spring", 
    stiffness: 500, 
    damping: 10
  };

  return (
    <motion.div 
      className={styles.iconDiv}
      whileHover={{ scale: 1.2 }} 
      whileTap={{ scale: 0.9 }}
      transition={transition} 
      onClick={()=>window.open(href, target)}
    >
      <LucideIcon size={size} color={color} />
    </motion.div>
  );
}

export default Icon;