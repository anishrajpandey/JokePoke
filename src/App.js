import react, { useState } from "react";
import JokeItem from "./components/JokeItem";
import "./components/style.css";
import settinglogo from "./components/assets/settings.png";
// document.body.style.background = " red ";

function App() {
  const [Theme, setTheme] = useState(true);

  return (
    <>
      <div className="customizeArea">
        <div className="options">
          <div
            className="theme"
            title={Theme ? "Switch to light theme" : "Switch to dark theme"}
          >
            <svg
              onClick={() => {
                if (Theme) {
                  document.body.classList.remove("darkStyle");
                  document.body.classList.add("lightStyle");
                } else {
                  document.body.classList.remove("lightStyle");
                  document.body.classList.add("darkStyle");
                }
                console.log(Theme);
                setTheme(!Theme);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill={Theme ? "white" : "black"}
              className="bi bi-lightbulb-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <div className="settings">
            <img src={settinglogo} alt="Settings" />
          </div>
        </div>
      </div>
      <JokeItem category="Any" />
    </>
  );
}
export default App;
