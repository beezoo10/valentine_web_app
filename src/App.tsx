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
    src: "https://media.tenor.com/6Vt_LuPoLUoAAAAi/gatotriste.gif",
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
  // increments no counter
  const [noCount, setNoCount] = useState(0);
  // for conditionally displaying images
  const [displayImg, setDisplayImg] = useState({
    askingCat: true,
    cryingCat: false,
    yayCatDog: false,
  });
  // for conditionally displaying text
  const [displayText, setDisplayText] = useState({
    askingText: true,
    heSaidYes: false,
  });
  // for size of the yes button
  const yesButtonSize = noCount * 20;
  // increment no count by 1
  function handleNoClick() {
    // setNoPressed(true);
    setDisplayImg({
      askingCat: false,
      cryingCat: true,
      yayCatDog: false,
    });
    setNoCount(noCount + 1);
  }
  function handleYesClick() {
    // setYesPressed(true);
    setDisplayText({
      askingText: false,
      heSaidYes: true,
    });
    setDisplayImg({
      askingCat: false,
      cryingCat: false,
      yayCatDog: true,
    });
  }
  // grabs text for no phrases, returns either the current phrase or the last one (?)
  function getNoText() {
    return saidNo[Math.min(noCount, saidNo.length - 1)];
  }

  // put this back in the yes button --> style={{ fontSize: yesButtonSize }}

  return (
    <div className="valContainer">
      <div className="gif">
        {displayImg.askingCat && <img src={imageArr[0].src} width="300px" />}
        {displayImg.cryingCat && <img src={imageArr[1].src} width="300px" />}
        {displayImg.yayCatDog && <img src={imageArr[2].src} width="300px" />}
      </div>
      <div className="text">
        {displayText.askingText && <p>{textArr[0].src}</p>}
        {displayText.heSaidYes && <p>{textArr[1].src}</p>}
      </div>
      <div>
        <button
          className="yesButton"
          style={{ fontSize: yesButtonSize }}
          onClick={handleYesClick}
        >
          yes!
        </button>
        <button className="noButton" onClick={handleNoClick}>
          {getNoText()}
        </button>
      </div>
    </div>
  );
}

export default App;
