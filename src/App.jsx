import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function createImgDiv(url) {
    let newImg = document.createElement("img");
    let newDiv = document.createElement("div");
    let parentDiv = document.getElementById("pokeContainer");
    //set image source to be URL of new pokemon
    newImg.src = url;
    //adding new div to parent pokecontainer div
    parentDiv.appendChild(newDiv);
    //adding an img tag to new child div
    newDiv.appendChild(newImg);
  }
  
  function getTeam (event){
    event.preventDefault();

  }
  return (
    <>
      <h1>Pokemon Dream Team</h1>
      <main className="form-container">
        <form onsubmit={getTeam}>
          <input type="submit" value="Dream Team Activate" id="submitButton" />
        </form>
        <div id='pokeContainer'>

        </div>
      </main>

  
    </>
  );
}

export default App;
