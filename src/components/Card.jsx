import "../styles/Card.css";
import { useEffect } from "react";

export default function Card({ character, current, best, rand, cc }) {
  useEffect(() => {
    if (current.currentScore > best.bestScore) {
      best.setBestScore(current.currentScore);
    }

    if (current.currentScore == 25) {
      alert("Congrats! You beat the game!");
    }
  }, [current.currentScore]);

  function handleCardClick(e) {
    let id = e.currentTarget.id;
    if (cc.consecutiveClicks.includes(id)) {
      cc.setConsecutiveClicks([]);
      current.setCurrentScore(0);
    } else {
      cc.setConsecutiveClicks([...cc.consecutiveClicks, id]);
      current.setCurrentScore(current.currentScore + 1);
    }
    rand.set(rand.get());
  }

  return (
    <div id={character.id} className="card" onClick={handleCardClick}>
      <div className="contents">
        <img src={character.images[0]}></img>
        <div>{character.name}</div>
      </div>
    </div>
  );
}
