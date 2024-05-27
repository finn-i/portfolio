import { Menu } from 'lucide-react';
import styles from '../styles/nav.module.css';
import { motion, useCycle } from 'framer-motion';

const Nav = () => {

  const [menuOpen, toggleMenuOpen] = useCycle(false, true);

  const navItems = [
    {name: "ABOUT", href: "#about"},
    {name: "PROJECTS", href: "#exp"},
    {name: "CONTACT", href: "#contact"}
  ];
  
  const navVariant = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07, 
        delayChildren: 0.2
      }
    },
    closed: {
      clipPath: "inset(5% 5% 95% 95% round 20px)",
      opacity: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05, 
        staggerDirection: -1
      }
    }
  }

  const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <div className={styles.navContainer}>
      <a className={styles.navTitle} href={"#home"}>F</a>
      <div className={styles.navItems}>
        {navItems.map((item, idx) => {
          return <a className={styles.navItem} href={item.href} key={idx}>{item.name}</a>
        })}
      </div>
      <Menu className={styles.navMenuButton} size={32} onClick={() => toggleMenuOpen()} />
      <motion.nav className={styles.mobileMenu} initial={false} animate={menuOpen ? "open" : "closed"} variants={navVariant}>
        {navItems.map((item, idx) => {
          return <motion.a href={item.href} onClick={()=>toggleMenuOpen()} variants={variants2} className={styles.mobileMenuItem} key={idx}>{item.name}</motion.a>
        })}
      </motion.nav>
    </div>
  )
}

export default Nav;