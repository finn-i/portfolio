import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { motionIconHover, motionIconHoverScale } from "../../assets/data";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  icon: IconProp,
  target: string,
  href: string,
  size: SizeProp  
}

const Icon: React.FC<IconProps> = ({ icon, target, href, size }) => {
  return (
    <motion.a whileHover={motionIconHoverScale} transition={motionIconHover} target={target} href={href}>
      <FontAwesomeIcon icon={icon} size={size} />
    </motion.a>
  );
}

export default Icon;