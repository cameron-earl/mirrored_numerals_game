import classNames from 'classnames';
import React from 'react';

import styles from './Numeral.module.css';

interface numeralProps {
  numeral: number;
  isReversed: boolean;
  handleClick: () => void;
  wasAnswered: boolean;
}

function Numeral(props: numeralProps) {
  const { numeral, handleClick, isReversed, wasAnswered } = props;

  const numeralClass = classNames({
    [styles.numeral]: true,
    [styles.reversed]: isReversed && !wasAnswered,
    [styles.correct]: isReversed && wasAnswered,
    [styles.incorrect]: !isReversed && wasAnswered,
  });

  return (
    <button className={numeralClass} onClick={handleClick}>
      {numeral}
    </button>
  );
}

export default Numeral;
