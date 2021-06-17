import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ answerQuestion }) => {
  const timerNumber = 30;
  const timeoutCountdown = 1000;

  const [timer, setTimer] = useState(timerNumber);

  const timer1 = () => setTimeout(() => setTimer(timer - 1), timeoutCountdown);
  const timerId = timer1();

  const timerZerado = () => {
    clearTimeout(timerId);
    answerQuestion(true);
  };

  return (
    <div>
      <p>
        {timer > 0 ? `${timer} segundos` : timerZerado() }
      </p>
    </div>
  );
};

Timer.propTypes = {
  answerQuestion: PropTypes.func,
}.isRequired;

export default Timer;
