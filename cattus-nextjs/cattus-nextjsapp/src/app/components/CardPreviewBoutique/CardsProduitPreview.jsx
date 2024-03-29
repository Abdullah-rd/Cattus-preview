import Card from "./Cardproduit.jsx";
import React from "react";
import Data from "./dataTestProduit.js";



export default function CardsPreview() {
  const id = React.useId;
  const cards = Data.produits.map((prev) => {
    return (
      <Card
        key={id}
        title={prev.title}
        prix={prev.prix}
        rating={prev.rating}
        description={prev.description}
      />
    );
  });


  return (
    <div className=" lg:mt-20 px-10">
      <div className="flex justify-between items-center">
      <h1 className="title text-4xl py-5 px-5 font-bold ">
        Top Produit sponsorisee
      </h1>
      <button className="btn btn-ghost shadow-sm btn-sm rounded-md ">voir plus</button>
      </div>
      <div className=" info--container flex gap-7 py-7 px-5  flex-nowrap overflow-x-auto transition ease-in-out  relative ">
        {cards}
      </div>


    





    </div>
  );
}
