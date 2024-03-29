import Card from "./CardAnimal.jsx";
import React from "react";
import Data from "./dataTestAnimal.js";



export default function CardsPreview() {
  const id = React.useId;
  const cards = Data.cat.map((prev) => {
    return (
      <Card
        key={id}
        titre={prev.title}
        description={prev.description}
        race={prev.race}
        typeAnimal={prev.animal}
        genre={prev.genre}
        label={prev.label}
      />
    );
  });


  return (
    <div className=" lg:mt-20 px-10">
      <div className="flex justify-between items-center">
      <h1 className="title text-4xl py-5 px-5 font-bold ">
        Top animaux en adoption
      </h1>
      <button className="btn btn-ghost shadow-sm btn-sm rounded-md ">voir plus</button>
      </div>
      <div className=" info--container flex gap-7 py-7 px-5  flex-nowrap overflow-x-auto transition ease-in-out  relative ">
        {cards}
      </div>
    </div>
  );
}
