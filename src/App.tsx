import { useState } from "react";
import "./App.css";

import confetti from "https://cdn.skypack.dev/canvas-confetti";

const saidNo = [
  "WHAT",
  "excuse me?? :(",
  "i thought we had something :(",
  "BUT ALEX WHY",
  "can i change your mind",
  "could you... be convinced?",
  "okay... last chance, do you want to be my valentine?",
  "ARE YOU SERIOUS",
  "okay ACTUALLY last chance",
  "damn i can't believe you still clicked no",
  "that's messed up",
  "okay... well i respect your decision :(",
  "ACTUALLY, I DON'T (in this context)",
  "DAMN STOP CLICKING, I GET IT",
  "please :(",
  "AH",
  "you're breaking my heart",
  "ouchie",
  "please stop",
  "okay please this isn't funny anymore",
  "but alex :(",
  "please say sike",
  "PLEASE SAY SIKE",
  "i'm begging you pookie please",
  "wow i even called you pookie",
  "that was embarassing for me you know",
  "okay you can click yes now",
  "hello?? CLICK YES",
  "there's literally no more text after this",
  "wow this is how game devs must feel typing out achievements for obnoxious players",
  "seriously click yes now or i'll fight you",
  "there's no more pookie",
  "okay, what about this",
  "i had to learn how to animate that, are you happy now",
  "wow, tough crowd",
  "okay final time",
  "i'm serious",
  "will you, alex, be my valentine?",
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
    src: "alex, will you be my valentine this year?",
  },
  {
    id: "heSaidYes",
    src: "WAHOOOOOO wait really?! omg YAY EEEEEEEEE",
  },
  {
    id: "heSaidYes2",
    src: "happy valentine's day!!",
  },
  {
    id: "heSaidYes3",
    src: "mwah mwah mwah - brisa",
  },
];

function App() {
  // hook for incrementing no counter
  const [noCount, setNoCount] = useState(0);
  // hook for checking if yes was pressed
  const [yesPressed, setYesPressed] = useState(false);
  // hook for conditionally displaying images
  const [displayImg, setDisplayImg] = useState({
    askingCat: true,
    cryingCat: false,
    yayCatDog: false,
  });
  // hook for conditionally displaying text
  const [displayText, setDisplayText] = useState({
    askingText: true,
    heSaidYes: false,
    heSaidNo: false,
  });
  // for the star
  const [displayStar, setDisplayStar] = useState(false);
  // for size of the yes button
  const yesButtonSize = noCount * 15 ? noCount * 15 : 15;
  // increment no count by 1 and set to crying cat, and change text
  function handleNoClick() {
    setNoCount(noCount + 1);
    setDisplayImg({
      askingCat: false,
      cryingCat: true,
      yayCatDog: false,
    });
    setDisplayText({
      askingText: false,
      heSaidYes: false,
      heSaidNo: true,
    });
    if (noCount === 31) {
      setDisplayStar(true);
    } else if (noCount === 32) {
      setDisplayStar(false);
    }
  }
  // sets display text to yes message, and display img to yay cat dog, also triggers confetti
  function handleYesClick() {
    confetti();

    window.addEventListener("click", () => {
      confetti();
    });

    setDisplayText({
      askingText: false,
      heSaidYes: true,
      heSaidNo: false,
    });

    setDisplayImg({
      askingCat: false,
      cryingCat: false,
      yayCatDog: true,
    });

    setYesPressed(true);
  }
  // grabs text for no phrases, returns either the current phrase or the last if at the end
  function getNoText() {
    console.log(noCount);
    return saidNo[Math.min(noCount, saidNo.length - 1)];
  }

  return (
    <div className="valContainer">
      {displayStar && (
        <div className="star">
          <img src="src/assets/star.png" height="200px" />
        </div>
      )}
      <div className="gif">
        {displayImg.askingCat && <img src={imageArr[0].src} height="300px" />}
        {displayImg.cryingCat && <img src={imageArr[1].src} height="300px" />}
        {displayImg.yayCatDog && <img src={imageArr[2].src} height="300px" />}
      </div>
      <div className="text">
        {displayText.askingText && <p>{textArr[0].src}</p>}
        {displayText.heSaidNo && <p>{getNoText()}</p>}
        {displayText.heSaidYes && (
          <div>
            <p>{textArr[1].src}</p>
            <p className="happyValentines">{textArr[2].src}</p>
            <p>
              {textArr[3].src}
              <img
                className="miniHeart"
                src="src/assets/heart.png"
                width="10px"
              />
            </p>
          </div>
        )}
      </div>
      {!yesPressed && (
        <div className="buttonContainer">
          <button
            className="yesButton"
            style={{ fontSize: yesButtonSize }}
            onClick={handleYesClick}
          >
            yes!
          </button>
          <button className="noButton" onClick={handleNoClick}>
            no
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
