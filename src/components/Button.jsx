import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

//button when pressed will access pokeapi by type
function Button({ pokeType, setPokeType, pokeGang, setPokeGang, pokePics, setPokePics }) {
  //random num generator
  function randNumGenerator(int) {
    return Math.floor(Math.random() * int);
  }

  function getTeam (){
  
    async function getPokemon() {
      let result = await axios.get("https://pokeapi.co/api/v2/type");
      let data = result.data.results;
      //setting poke type -- object {name: , url: }
      let typeInfo = data[randNumGenerator(data.length)];
      let typeURL = typeInfo.url;
      let typeName = typeInfo.name;
      //getting 5 pokes to form our gang
      let tempGang = [];
      let pokeResult = await axios.get(typeURL);
      let pokeData = pokeResult.data.pokemon;
      for (let i = 1; i <= 5; i++) {
        let poke = pokeData[randNumGenerator(pokeData.length)].pokemon;
        tempGang.push(poke.name);
      }
      console.log(`TEMP GANG: ${JSON.stringify(tempGang)}`);
      //   console.log(`TYPE NAME: ${typeName}`);

      setPokeGang(tempGang);
      setPokeType(typeName);

      //getting poke IMG
      let tempPokePics = [];

      for (let j = 0; j <= tempGang.length -1; j++) {
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${tempGang[j]}`
        );
        let pokePicURL = response.data.sprites.front_shiny;
        // console.log(pokePicURL)
        tempPokePics.push(pokePicURL);
      };
    //   console.log(tempPokePics);
    setPokePics(tempPokePics)

    };

    getPokemon();
  }

    // console.log(`POKE GANG: ${pokeGang}`);
  //   console.log(`POKE TYPE: ${pokeType}`);

  //onclick function for button
  function showGang(event) {
    
    return pokeGang.map((poke, i) => (
      <div
        key={i}
        className="basis-1/5 rounded border border-red-500 m-1 flex justify-center flex-col-reverse bg-green-200 bg-opacity-50"
      >
        <img src={pokePics[i]} className="" />
        <div id="poke name" className="text-brown-700 text-center">
          {pokeGang[i]}
        </div>
      </div>
    ));
    console.log("hello");
    
  }

  return (
    <React.Fragment>
      <div className="flex justify-contents justify-center">
        <button
          onClick={getTeam}
          type="button"
          className=" text-white px-12 py-8 text-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Activate Team!
        </button>
      </div>
      <h2
        className=" bg-gradient-to-b from-blue-200 to-blue-800 flex justify-center p-4   text-yellow-400
      text-5xl font-extrabold m-8 border"
      >
        {pokeType.toUpperCase()}
      </h2>
      <div id="pokeContainer" className="flex flex-row">
        {showGang()}
      </div>
    </React.Fragment>
  );
}

export default Button;
