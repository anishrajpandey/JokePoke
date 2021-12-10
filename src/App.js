import react, { useState, useEffect } from "react";
import JokeItem from "./components/JokeItem";
import "./components/style.css";
import settinglogo from "./components/assets/settings.png";

function App() {
  const [Theme, setTheme] = useState(true);
  const [Done, setDone] = useState(false);

  const [Category, setCategory] = useState("Any");

  const [Flags, setFlags] = useState("");
  const [JokeType, setJokeType] = useState("");
  const [Word, setWord] = useState("");

  const [Block, setBlock] = useState(false);

  useEffect(() => {
    if (Block) {
      document.documentElement.style.setProperty("--displayValue", "grid");
    } else {
      document.documentElement.style.setProperty("--displayValue", "none");
    }
  }, [Done]);
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
            <img
              src={settinglogo}
              alt="Settings"
              style={Theme ? { filter: "invert(1)" } : null}
              onClick={() => {
                setBlock(!Block);
                console.log(Block);
                if (Block) {
                  document.documentElement.style.setProperty(
                    "--displayValue",
                    "none"
                  );
                } else {
                  document.documentElement.style.setProperty(
                    "--displayValue",
                    "grid"
                  );
                }
              }}
            />
          </div>
        </div>
        <div className="menu">
          <div className="category">
            <span>Category</span>
            <form action="./backend.py">
              <div>
                <label htmlFor="a">
                  <input
                    type="radio"
                    defaultChecked
                    name=""
                    id="a"
                    name="option"
                    onClick={(e) => {
                      e.target.checked ? setCategory("Any") : setCategory("");
                    }}
                  />
                  <span className="item">All</span>
                </label>
              </div>
              <div>
                <label htmlFor="programming">
                  <input
                    type="radio"
                    name="option"
                    id="programming"
                    value="Programming"
                    onClick={(e) => {
                      e.target.checked
                        ? setCategory("Programming")
                        : setCategory("");
                    }}
                  />
                  <span className="item">Programming</span>
                </label>
              </div>
              <div>
                <label HTMLFor="Miscellaneous">
                  <input
                    type="radio"
                    id="Miscellaneous"
                    name="option"
                    onClick={(e) => {
                      e.target.checked
                        ? setCategory("Miscellaneous")
                        : setCategory("");
                    }}
                  />
                  <span className="item">Miscellaneous</span>
                </label>
              </div>

              <div>
                <label htmlFor="Dark">
                  <input
                    type="radio"
                    name="option"
                    id="Dark"
                    onClick={(e) => {
                      e.target.checked ? setCategory("Dark") : setCategory("");
                    }}
                  />
                  <span className="item">Dark</span>
                </label>
              </div>
              <div>
                <label htmlFor="Pun">
                  <input
                    name="option"
                    type="radio"
                    id="Pun"
                    onClick={(e) => {
                      e.target.checked ? setCategory("Pun") : setCategory("");
                    }}
                  />
                  <span className="item">Pun</span>
                </label>
              </div>
              <div>
                <label htmlFor="Spooky">
                  <input
                    type="radio"
                    name="option"
                    id="Spooky"
                    onClick={(e) => {
                      e.target.checked
                        ? setCategory("Spooky")
                        : setCategory("");
                    }}
                  />
                  <span className="item">Spooky</span>
                </label>
              </div>
            </form>
          </div>

          <div className="flags">
            <span>Safe Mode</span>
            <div>
              <label htmlFor="choice2">
                <input
                  type="radio"
                  defaultChecked
                  name="choice"
                  id="choice2"
                  onClick={(e) => {
                    e.target.checked
                      ? setFlags(
                          "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
                        )
                      : setFlags("");
                  }}
                />
                <span className="item">On</span>
              </label>
            </div>

            <div>
              <label htmlFor="choice1">
                <input
                  type="radio"
                  name="choice"
                  id="choice1"
                  onClick={(e) => {
                    e.target.checked
                      ? setFlags("")
                      : setFlags(
                          "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
                        );
                  }}
                />
                <span className="item">Off</span>
              </label>
            </div>
          </div>
          <div className="jokepart">
            <span>Joke type</span>
            <div>
              <label htmlFor="Single">
                <input type="checkbox" id="Single" />
                <span className="item">Single</span>
              </label>
            </div>
            <div>
              <label htmlFor="Double">
                <input type="checkbox" id="Double" />
                <span className="item">Two Part</span>
              </label>
            </div>
          </div>
          <div className="words">
            <span>Word to Include</span>
            <input type="text" placeholder="Enter a word" />
          </div>
          <button
            className="apply"
            onClick={() => {
              console.log(document.getElementById("btn"));
            }}
          >
            Apply
          </button>
        </div>
      </div>
      <JokeItem category={Category} flags={Flags} />
    </>
  );
}
export default App;
