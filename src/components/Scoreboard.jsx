export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <>
      <div id="current-score">Current Score: {currentScore}</div>
      <div id="best-score">Best Score: {bestScore}</div>
    </>
  );
}
