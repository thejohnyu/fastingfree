import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="parent">
        <header className="section coral">Header</header>
        <div className="left-side section blue">Left Sidebar</div>
        <main className="section green"> Main Content</main>
        <div className="right-side section yellow">Right Sidebar</div>
        <footer className="section coral">Footer</footer>
      </div>
    </>
  );
}

export default App;
