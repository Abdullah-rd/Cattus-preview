
import preview from "./../../assets/preview.jpg"
import PropTypes from 'prop-types';

export default function Card(props){


  return (
    <div className="card w-64 bg-base-100 shadow-xl flex-none hover:cursor-pointer

    ">
    <figure><img src={preview} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title overflow-hidden whitespace-nowrap overflow-ellipsis">
        {props.titre}
        {props.new && <div className="badge badge-secondary ">for adoption</div> }

      </h2>
      <p className="overflow-hidden line-clamp-2 whitespace-normal overflow-ellipsis mb-2">{props.description}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{props.typeAnimal}</div> 
        <div className="badge badge-outline">{props.race}</div> 
        <div className="badge badge-outline">{props.genre}</div>
      </div>
    </div>
  </div>
)
    
}

Card.propTypes = {
  titre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  typeAnimal: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  new: PropTypes.bool 
};