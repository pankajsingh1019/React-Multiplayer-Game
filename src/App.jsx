import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {

  const[activePlayer, setActivePlayer] = useState("X");

  function handleSelectedSquare(){
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
  }

 return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={'Player-1'} symbol={'X'} isActive={activePlayer === "X"} />
          <Player name={'Player-2'} symbol={'O'} isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectPlayer={handleSelectedSquare} activePlayer={activePlayer} />
      </div>
      GameLOG
    </main>
  )
}

export default App
