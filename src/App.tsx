// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import LeftSideBar from "./components/left-side-bar/LeftSideBar";

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
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </main>
        <div className="right-side section yellow">Right Sidebar</div>
        <footer className="section coral">Footer</footer>
      </div>
    </>
  );
}

export default App;
