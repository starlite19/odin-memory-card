import "../styles/CardGrid.css";
import { useState } from "react";
import Card from "./Card.jsx";

function getRandNums() {
  let arr = [];
  for (let i = 0; i < 25; i++) {
    arr.push(i);
  }

  // Shuffle array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr.slice(0, 12);
}

// const initialRand = getRandNums();

export default function CardGrid({ characters, current, best }) {
  const [randNums, setRandNums] = useState(getRandNums());

  return (
    <div id="card-grid">
      {randNums.map((n) => (
        <Card
          character={characters[n]}
          current={current}
          best={best}
          rand={{ set: setRandNums, get: getRandNums }}
        />
      ))}
    </div>
  );
}
