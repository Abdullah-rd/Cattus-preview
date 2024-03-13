
import animal from "../assets/animal.png"
import preview from "../assets/preview.jpg"
import user from "../assets/user.png"

export default function Card(props) {

    return (
        console.log(props),
        <div className="card--container">
            <img src={preview} />
            <h3>{props.nom}</h3>
            <div className="info-group">

                <img src={animal} alt='test'/>
                <p>{props.type}</p>

            </div>
            <div className="info-group">
                <img src={user} />
                <p>{props.user}</p>
            </div>

        </div>



    );

}
