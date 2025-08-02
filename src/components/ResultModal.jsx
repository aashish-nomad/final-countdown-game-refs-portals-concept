import { useImperativeHandle, useRef } from "react"

export default function ResultModal({ ref, onReset, targetTime, remainingTime  }) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const userScore = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));

  return <dialog ref={dialog} className="result-modal" onClose={onReset}>
    <h2>{userLost ? 'You lost' : `You won - Your Score: ${userScore}`}</h2>
    <p>
      The target time was: <strong>{targetTime}</strong> seconds
    </p>
    <p>You stopped the timer with <strong>{((remainingTime / 1000).toFixed(2))}</strong> seconds left</p>
    <form method="dialog" onSubmit={onReset}>
      <button>Close</button>
    </form>
  </dialog>
}