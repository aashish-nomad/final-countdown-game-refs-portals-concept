export default function ResultModal({ result, targetTime }) {
  return <dialog className="result-modal" open>
    <h2>{result === 'lost' ? 'You lost' : 'You won'}</h2>
    <p>
      The target time was: <strong>{targetTime}</strong> seconds
    </p>
    {/* Future Feature */}
    {/* <p>You stopped the timer with <strong>x</strong> seconds left</p> */}
    <form method="dialog">
      <button>Close</button>
    </form>
  </dialog>
}