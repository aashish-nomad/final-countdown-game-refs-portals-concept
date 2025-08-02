import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  let isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 10;
      })
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleTimerReset() {
    setRemainingTime(targetTime * 1000);
  }

  return (
    <>
      <ResultModal targetTime={targetTime} remainingTime={remainingTime} ref={dialog} onReset={handleTimerReset}/>
      <section className="challenge">
        <h2 className="title">{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={isTimerActive ? 'active' : undefined}>
          {isTimerActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}