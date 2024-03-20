import React from 'react';
import Header from "./header.jsx";
import Comp2 from "./comp2.jsx";
import "../app.css";

export default function App() {
    const [arrayCards, setArrayCards] = React.useState([
        {
            nom: "dog",
            type: "rongeur",
            user: "user111"
        }
    ]);

    // Function to add an element to the array
    function addElement() {
        setArrayCards(prevCards => [
            ...prevCards,
            {
                nom: "dd",
                type: "ronddgeur",
                user: "userss111"
            }
        ]);
    }

    return (
        <>
            {/* Pass addElement function to Header */}
            <Header addElement={addElement} />
            {/* Pass arrayCards state to Comp2 */}
            <Comp2 arrayCards={arrayCards} setArrayCards={setArrayCards} />
        </>
    );
}
