import React, { useState } from 'react';

const Timer = ({ answerQuestion }) => {
  const timerNumber = 30;
  const timeoutCountdown = 1000;

  const [timer, setTimer] = useState(timerNumber);

  const usingSetTimer = () => setTimer((previousState) => previousState - 1);
  const timer1 = () => setTimeout(() => usingSetTimer(), timeoutCountdown);
  const timerId = timer1();

  const timerZerado = () => {
    answerQuestion(true);
    clearTimeout(timerId);
  };

  return (
    <div>
      <p>
        {timer > 0 ? `${timer} segundos` : timerZerado() }
      </p>
    </div>
  );
};

export default Timer;
