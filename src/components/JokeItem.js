import React, { useState, useEffect } from "react";
import "./style.css";
import loadingLogo from "./loader.svg";

function repeatstringnumtimes(str, num) {
  var repeatedstring = "";
  for (let i = 0; i < num; i++) {
    repeatedstring = repeatedstring + str;
  }

  return repeatedstring;
}
export default function JokeItem(props) {
  const [joke, setJoke] = useState("");
  const [Fetch, setFetch] = useState(true);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const getJoke = async () => {
      setLoading(true);
      const jokeData = await fetch(
        `https://v2.jokeapi.dev/joke/${props.category}`
      );
      setLoading(false);

      const jokeObj = await jokeData.json();
      setJoke(
        jokeObj.joke
          ? jokeObj.joke
          : [
              `A:${jokeObj.setup} `,
              repeatstringnumtimes("x", 37 - jokeObj.setup.length),
              `B:${jokeObj.delivery}`,
            ]
      );
      console.log(Array.isArray(joke));
      console.log(joke);
    };
    getJoke();
  }, [Fetch]);
  return (
    <div className="JokeBox">
      <div className="heading">Get A Joke</div>
      <div className="mainjoke">
        {Loading ? (
          <img src={loadingLogo} alt="loading" />
        ) : (
          <div>{!Array.isArray(joke) ? joke : joke[0] + joke[2]}</div>
        )}
      </div>
      <div className="btnarea">
        <button
          className="btn-primary"
          onClick={() => {
            setFetch(!Fetch);
          }}
        >
          Another One
        </button>
      </div>
    </div>
  );
}
