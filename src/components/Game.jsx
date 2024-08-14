import Header from "./Header.jsx";
import CardGrid from "./CardGrid.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import Card from "./Card.jsx";
import { useState, useEffect } from "react";

export default function Game() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetch("https://narutodb.xyz/api/character?page=20&limit=25")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setCharacters(response.characters))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div id="game">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid
        characters={characters}
        current={{ currentScore, setCurrentScore }}
        best={{ bestScore, setBestScore }}
      />
    </div>
  );
}
// page=21, 23,  38, 41, 45, 46, 48
