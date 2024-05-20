import ReactFullpage from '@fullpage/react-fullpage';
import styles from './styles/root.module.css';
import Scene from './components/Scene';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';

const Root = () => {

  return (
    <div className={styles.main}>
      <Nav />
      <Scene />
      <ReactFullpage
        licenseKey={"gplv3-license"}
        anchors={["home", "about", "exp", "contact"]}
        navigation // shows navigation circles
        scrollingSpeed={700}
        dragAndMove={"vertical"}
        touchSensitivity={15}
        keyboardScrolling={true}
        credits={{ enabled: true }}
        scrollBar={true}
        render={({  }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className={`section ${styles.section}`}>
                <Home />
              </div>
              <div className={`section ${styles.section}`}>
                <About />
              </div>
              <div className={`section ${styles.section}`}>
                <Experience />
              </div>
              <div className={`section ${styles.section}`}>
                {/* <Contact /> */}
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  )
}

export default Root;
