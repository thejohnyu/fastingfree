// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import LeftSideBar from "./components/left-side-bar/LeftSideBar";
import MainContent from "./components/main-content/MainContent";
import Footer from "./components/footer/Footer";
import RightSideBar from "./components/right-side-bar/RightSideBar";
import Header from "./components/header/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="parent">
        <header className="section">
          <Header />
        </header>
        <div className="left-side section">
          <LeftSideBar />
        </div>
        <main className="section">
          <MainContent />
        </main>
        <div className="right-side section">
          <RightSideBar />
        </div>
        <footer className="section">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
