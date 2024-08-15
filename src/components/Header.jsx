import Scoreboard from "./Scoreboard";
import "../styles/Header.css";

export default function Header({ currentScore, bestScore }) {
  return (
    <div id="header">
      <div id="header-left">
        <div id="header-title">
          <h1>Naruto Memory Game</h1>
        </div>
        <span id="instructions">
          Click on images to earn points, but avoid clicking the same image more
          than once. Your score depends on how many different images you click
          in a row without repeating.
        </span>
      </div>
      <div id="header-right">
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>
    </div>
  );
}
