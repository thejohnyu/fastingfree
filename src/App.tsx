// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import LeftSideBar from "./components/left-side-bar/LeftSideBar";
import MainContent from "./components/main-content/MainContent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="parent">
        <header className="section coral">Header</header>
        <div className="left-side section blue">
          <LeftSideBar />
        </div>
        <main className="section green">
          {/* <div className="center">
            <div className="progress">
              <svg className="progress-bar" width="300" height="300">
                <circle
                  className="progress-circle"
                  cx="150"
                  cy="150"
                  r="135"
                ></circle>
                <circle
                  className="progress-circle"
                  cx="150"
                  cy="150"
                  r="135"
                ></circle>
              </svg>
              <div className="text">
                Elapsed Time (27%)
                <span>Completed</span>
              </div>
            </div>
          </div> */}
          <MainContent />
        </main>
        <div className="right-side section yellow">Right Sidebar</div>
        <footer className="section coral">Footer</footer>
      </div>
    </>
  );
}

export default App;
