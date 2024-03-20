import  { useState, useEffect } from 'react';
import Header from "./header.jsx";
import Comp2 from "./comp2.jsx";
import "../app.css";

export default function App() {
    // Initialize state with data from local storage or default value
    const [arrayCards, setArrayCards] = useState(() => {
        const savedCards = localStorage.getItem('cards');
        return savedCards ? JSON.parse(savedCards) : [
            {
                nom: "dog",
                type: "rongeur",
                user: "user111"
            }
        ];
    });

    // Update local storage whenever arrayCards changes
    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(arrayCards));
    }, [arrayCards]);

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
