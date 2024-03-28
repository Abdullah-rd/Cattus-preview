import Card from "./CardAnimal.jsx";
import React from "react";
import Data from "./dataTestAnimal.js";
import {motion} from "framer-motion"



export default function CardsPreview() {
  const [width,setWidth] = React.useState(0)
  const CC = React.useRef()

React.useEffect(() => {
  setWidth(CC.current.scrollWidth - CC.current.offsetWidth)
}

,[])

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
    <div className=" lg:mt-20 px-10" ref={CC}>
      <h1 className="title text-4xl py-5 text-center font-bold ">
        Top animaux en adoption
      </h1>
      <motion.div drag="x" dragConstraints={{right:0,left:-width}} className=" info--container flex gap-7 py-7 px-5  flex-nowrap">
        {cards}
      </motion.div>
    </div>
  );
}
