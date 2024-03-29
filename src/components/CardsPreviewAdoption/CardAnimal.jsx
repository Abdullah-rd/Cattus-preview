import preview from "./../../assets/preview.jpg";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div 
      className="card w-64 bg-base-100 shadow-lg flex-none hover:cursor-pointer 
    group
    "
    >
      <figure>
        <img
          src={preview}
          alt="animal"
          className="transition ease-in-out group-hover:scale-[1.1] pointer-events-none"
        />
      </figure>
      <div className="card-body transition ease-in-out px-5 py-6 ">
        <h2 className="card-title overflow-hidden whitespace-nowrap overflow-ellipsis transition ease-in-out group-hover:translate-y-[-3px]">
          {props.titre}
          {props.label && (
            <div className="badge badge-secondary">{props.label}</div>
          )}
        </h2>
        <p className="overflow-hidden line-clamp-2 whitespace-normal overflow-ellipsis mb-2 transition ease-in-out group-hover:translate-y-[-3px]">
          {props.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline ">{props.race}</div>
          <div className="badge badge-outline ">{props.genre}</div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  titre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  typeAnimal: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  label: PropTypes.string,
};
