import styles from '../styles/nav.module.css';

const Nav = () => {

  const navItems = [
    {name: "ABOUT", href: "#about"},
    {name: "PROJECTS", href: "#exp"},
    {name: "CONTACT", href: "#contact"}
  ]

  return (
    <div className={styles.navContainer}>
      <a className={styles.navTitle} href={"#home"}>FINN</a>
      {navItems.map((item, idx) => {
        return <a className={styles.navItem} href={item.href} key={idx}>{item.name}</a>
      })}
    </div>
  )
}

export default Nav;