import "../styles/Card.css";
import { useEffect, useState } from "react";

export default function Card({ character, current, best, rand, cc }) {
  useEffect(() => {
    if (current.currentScore > best.bestScore) {
      best.setBestScore(current.currentScore);
    }
  }, [current.currentScore]);

  function handleCardClick(e) {
    let id = e.currentTarget.id;
    if (cc.consecutiveClicks.includes(id)) {
      cc.setConsecutiveClicks([id]);
      current.setCurrentScore(0);
    } else {
      cc.setConsecutiveClicks([...cc.consecutiveClicks, id]);
      current.setCurrentScore(current.currentScore + 1);
    }
    console.log("id", id);
    console.log(cc.consecutiveClicks);
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
