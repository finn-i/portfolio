import ReactFullpage from '@fullpage/react-fullpage';
import styles from './styles/root.module.css';
import Scene from './components/Scene';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useRef } from 'react';

const Root = () => {
  const rfpRef = useRef<any>(null);

  return (
    <div className={styles.main}>
      <Nav rfpRef={rfpRef} />
      <Scene />
      <ReactFullpage
        ref={rfpRef}
        licenseKey={"gplv3-license"}
        anchors={["home", "about", "exp", "contact"]}
        navigation
        scrollingSpeed={700}
        keyboardScrolling={true}
        credits={{ enabled: true }}
        scrollBar={true}
        normalScrollElements={".cardContainer"}
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
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  )
}

export default Root;
