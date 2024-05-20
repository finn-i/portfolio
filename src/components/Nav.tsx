import styles from '../styles/nav.module.css';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <a className={styles.navTitle} href={"#home"}>FINN</a>
      <a className={styles.navItem} href={"#about"}>ABOUT</a>
      <a className={styles.navItem} href={"#exp"}>PROJECTS</a>
      <a className={styles.navItem} href={"#contact"}>CONTACT</a>
    </div>
  )
}

export default Nav;