// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "./style.css";
import loadingLogo from "./loader.svg";

export default function JokeItem() {
  const [joke, setJoke] = useState("");
  const [Fetch, setFetch] = useState(true);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const getJoke = async () => {
      setLoading(true);
      const jokeData = await fetch("https://v2.jokeapi.dev/joke/Any");
      setLoading(false);
      const jokeObj = await jokeData.json();
      setJoke(
        jokeObj.joke
          ? jokeObj.joke
          : `${jokeObj.setup} ---------${jokeObj.delivery} `
      );
    };
    getJoke();
  }, [Fetch]);
  return (
    <>
      <div className="test"> JOKE-POKE</div>
      <button
        className="btn-primary"
        onClick={() => {
          setFetch(!Fetch);
          console.log(Fetch);
        }}
      >
        Get A Joke
      </button>

      {Loading ? <img src={loadingLogo} alt="loading" /> : <div>{joke}</div>}
    </>
  );
}
