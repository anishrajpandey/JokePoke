import react, { useState } from "react";
import JokeItem from "./components/JokeItem";
import "./components/style.css";
function App() {
  return (
    <>
      <div className="navbar">
        <div className="item" id="item1">
          Category
        </div>
        <div className="item" id="item2">
          sasd
        </div>
        <div className="item" id="item3">
          sasd
        </div>
        <div className="item" id="item4">
          sasd
        </div>
      </div>
      <JokeItem category="Any" />
    </>
  );
}
export default App;
