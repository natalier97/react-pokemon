import { useState, useEffect } from "react";
import React from "react";
import Button from "./components/Button.jsx";
import "./App.css";

//have button to press that will generate a new pokemon themed each time
//grab a pokemon from poke api
//grab 4 related pokemon
//display their img + name

function App() {
  const [pokeType, setPokeType] = useState(""); //going to be an obj w/ 2 keys-> "name" & "url
  const [pokeGang, setPokeGang] = useState([]);
 const [pokePics, setPokePics] = useState('');
  return (
    <>
      <h1 className=" bg-gradient-to-b from-pink-200 to-pink-800  text-blue-700 font-bold text-4xl flex justify-center mb-8 p-5">
        Pokemon Dream Team
      </h1>
      <Button
        pokeType={pokeType}
        setPokeType={setPokeType}
        pokeGang={pokeGang}
        setPokeGang={setPokeGang}
        setPokePics={setPokePics}
        pokePics={pokePics}
      />
    </>
  );
}

export default App;

// function App() {
//   //create a new div & populate img for each pokemon
//   function createImgDiv(url) {
//     let newImg = document.createElement("img");
//     let newDiv = document.createElement("div");
//     let parentDiv = document.getElementById("pokeContainer");
//     //set image source to be URL of new pokemon
//     newImg.src = url;
//     //adding new div to parent pokecontainer div
//     parentDiv.appendChild(newDiv);
//     //adding an img tag to new child div
//     newDiv.appendChild(newImg);
//   }

//   function randNumGenerator(int) {
//     return Math.floor(Math.random() * int);
//   }

//   //main function
//   const getTeam = async (event) => {
//     event.preventDefault();
//     //grab all TYPES of pokemon

//     //URL for accessing a pokemon type
//     //Pokemon Team Type
//   };
//   return (
//     <>
//       <h1>Pokemon Dream Team - {}</h1>
//       <main className="form-container">
//         <form onsubmit={getTeam}>
//           <input type="submit" value="Dream Team Activate" id="submitButton" />
//         </form>
//         <div id="pokeContainer"></div>
//       </main>
//     </>
//   );
// }

// export default App;
