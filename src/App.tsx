import { useState } from "react";
import "./App.css";

const saidNo = [
  "no",
  "excuse me?? :(",
  "really?",
  "i thought we had something :(",
  "BUT ALEX WHY",
  "how do i change your mind",
  "REALLY really?",
  "okay... last chance",
  "ARE YOU SERIOUS",
  "okay ACTUALLY last chance",
  "(bc these phrases are gonna loop)",
  "damn i can't believe you still clicked no",
  "okay... well i respect your decision :(",
  "DAMN STOP CLICKING, I GET IT",
];

const imageArr = [
  {
    id: "askingCat",
    src: "https://media.tenor.com/j_kkcdrkDYEAAAAi/bella-tontonbella.gif",
  },
  {
    id: "cryingCat",
    src: "https://media.tenor.com/5cRtQ5i5HmQAAAAi/tonton-tonton.gif",
  },
  {
    id: "yayCatDog",
    src: "https://media.tenor.com/lshEoMmoHvgAAAAi/tkthao219-tonton.gif",
  },
];

const textArr = [
  {
    id: "askingText",
    src: "Alex, will you be by valentine this year?",
  },
  {
    id: "heSaidYes",
    src: "WAHOOOOOOOO wait really?! omg thank you THANK YOU EEEEEEEEE",
  },
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPressed, setNoPressed] = useState(false);
  // for size of the yes button
  const yesButtonSize = noCount * 20;
  // increment no count by 1
  function handleNoClick() {
    setNoCount(noCount + 1);
    setNoPressed(true);
  }
  // grabs text for no phrases, returns either the current phrase or the last one (?)
  function getNoText() {
    return saidNo[Math.min(noCount, saidNo.length - 1)];
  }

  // put this back in the yes button --> style={{ fontSize: yesButtonSize }}

  return (
    <div className="valContainer">
      <img src={imageArr[0].src} />
      <div className="text">{textArr[0].src}</div>
      <div>
        <button className="yesButton">yes!</button>
        <button className="noButton" onClick={handleNoClick}>
          {getNoText()}
        </button>
      </div>
    </div>
  );
}

export default App;
