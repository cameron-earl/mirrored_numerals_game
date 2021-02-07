import './App.css';

import React, { useEffect, useRef, useState } from 'react';

import NextButton from './components/buttons/NextButton';
import Numeral from './components/Numeral';
import { fonts, fontSizeByFont } from './helpers/fonts';
import { getFilledArr, getNumArr, getReversed, randElement } from './helpers/helpers';
import { positiveMessages } from './helpers/positiveMessages';

const insertCommas = (arr: any[]) => {
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    newArr.push(arr[arr.length - i]);
    if (i % 3 === 0 && i < arr.length) {
      newArr.push(
        <span className="comma" key={i + '-comma'}>
          ,
        </span>
      );
    }
  }
  return newArr.reverse();
};

function App() {
  const [points, setPoints] = useState(0);
  const [numArr, setNumArr] = useState(getNumArr());
  const [reversed, setReversed] = useState(getReversed(numArr));
  const [answered, setAnswered] = useState(getFilledArr(numArr.length, false));
  const [font, setFont] = useState(randElement(fonts));
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const pointsRef = useRef<HTMLHeadingElement>(null);

  console.info('font:', font);

  const reset = () => {
    console.log('reset!');
    const newNumArr = getNumArr();
    const reversedArr = getReversed(newNumArr);
    const answeredArr = getFilledArr(newNumArr.length, false);
    setNumArr(newNumArr);
    setReversed(reversedArr);
    setAnswered(answeredArr);
    setFont(randElement(fonts));
  };

  const levelDone = reversed.reduce((goodSoFar, e, i) => goodSoFar && (!e || answered[i]), true);

  useEffect(() => {
    if (levelDone && nextButtonRef.current) {
      nextButtonRef.current.focus();
    } else if (pointsRef.current) {
      pointsRef.current.focus();
    }
  }, [levelDone]);

  const addPoints = (n: number) => setPoints(Math.max(points + n, 0));

  const handleNumeralClick = (i: number) => () => {
    if (answered[i] || levelDone) return;
    reversed[i] ? handleCorrect() : handleIncorrect();
    answered[i] = true;
    setAnswered([...answered]);
  };

  const handleCorrect = () => {
    console.log('woo hoo!');
    addPoints(1);
  };

  const handleIncorrect = () => {
    console.log('Whoopsie!');
    addPoints(-2);
  };

  const numerals = insertCommas(
    numArr.map((n, i) => (
      <Numeral
        key={`${n}-${i}`}
        isReversed={reversed[i]}
        wasAnswered={answered[i]}
        numeral={+n}
        handleClick={handleNumeralClick(i)}
      ></Numeral>
    ))
  );

  return (
    <div className="App">
      <h3 className="points" ref={pointsRef} tabIndex={-1}>
        Points: {points}
      </h3>
      <div className="numerals" style={{ fontFamily: font, fontSize: `${fontSizeByFont[font]}em` }}>
        {numerals}
      </div>
      {levelDone && (
        <div>
          <h1>{randElement(positiveMessages)}!</h1>
          <NextButton onClick={reset} buttonRef={nextButtonRef}></NextButton>
        </div>
      )}
    </div>
  );
}

export default App;
