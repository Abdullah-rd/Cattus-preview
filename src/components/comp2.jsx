import Card from "./Card.1";
import PropTypes from 'prop-types'; 

export default function Comp2({ arrayCards}) {
    let thingsArray = arrayCards.map(card => (
        <Card
            key={card.nom}
            nom={card.nom}
            type={card.type}
            user={card.user}
        />
    ));

    return (
        <div className="cards--container">
            {thingsArray}
        </div>
    );
}
Comp2.propTypes = {
        arrayCards: PropTypes.array.isRequired,
        setArrayCards: PropTypes.func.isRequired 
}    