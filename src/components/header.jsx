import "../header.css"; 
import PropTypes from 'prop-types'; 

export default function Header({ addElement }) {
    return (
        <div className="header">
            <input type="button" name="" value="+" className="add-btn" onClick={addElement} />
        </div>
    );
}
Header.propTypes = {
    addElement: PropTypes.func.isRequired 
};