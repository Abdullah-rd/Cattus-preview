import preview from "../../../../public/preview.jpg";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div
      className="card card-compact bg-base-100 w-64  shadow-lg flex-none hover:cursor-pointer group
    "
    >
      <figure>
        <img
          src={"./preview.jpg"}
          alt="produit"
          className="transition ease-in-out group-hover:scale-[1.1]"
        />
      </figure>
      <div className="card-body transition ease-in-out px-5 py-6">
        <h1 className="price text-xl font-bold font-sans ">{props.prix} DA</h1>
        <div className="info flex justify-between items-center ">
          <div className="rating">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-accent me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-bold ">{props.rating}</p>
              <span className="w-1 h-1 mx-1.5 bg-accent rounded-full "></span>
              <div className="text-sm font-medium ">73 reviews</div>
            </div>
          </div>
        </div>
        <h2 className="font-medium  line-clamp-2 overflow-hidden overflow-ellipsis transition ease-in-out text-sm mb-auto ">
          {props.title}
        </h2>

        <div className="card-actions justify-end ">
          <button className="btn btn-primary btn-sm">Acheter!</button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};
