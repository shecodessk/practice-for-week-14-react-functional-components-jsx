import bulba from "../src/images/bulbasaur.jpg";
import "./Showcase.css";
function Showcase() {
  const favPokemon = "Chicorita";
  const pokeCharacteristics = {
    type: "grass",
    move: "fire",
  };

  return (
    <div className="body">
      <h1> {favPokemon} Showcase Component</h1>
      <h2>
        Chicorita is a type:
        <span className="h2--first">{pokeCharacteristics.type}</span>
      </h2>
      <h2>
        Chicorita move is
        <span className="h2--second">{pokeCharacteristics.move}</span>
      </h2>
      <img className="image" src={bulba} alt={favPokemon} />
    </div>
  );
}
export default Showcase;
