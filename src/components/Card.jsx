import "../styles/Card.css";

export default function Card({ character, current, best, rand }) {
  function handleCardClick() {
    rand.set(rand.get());
  }

  return (
    <div
      id={character.id}
      class="card"
      key={character.id}
      onClick={handleCardClick}
    >
      <div class="contents">
        <img src={character.images[0]}></img>
        <div>{character.name}</div>
      </div>
    </div>
  );
}
