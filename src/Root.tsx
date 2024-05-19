import ReactFullpage from '@fullpage/react-fullpage';
import Scene from './components/Scene';
import styles from './styles/root.module.css';
import Nav from './components/Nav';

const Root = () => {

  return (
    <div className={styles.main}>
      <Nav />
      <Scene />
      <ReactFullpage
        licenseKey={"gplv3-license"}
        anchors={["home", "about", "work", "contact"]}
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
              <div className="section">
                {/* <Home /> */}
                asd
              </div>
              <div className="section">
                {/* <About /> */}
              </div>
              <div className="section">
                {/* <Work /> */}
              </div>
              <div className="section">
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
