import "../header.css"; 

export default function Header({ addElement }) {
    return (
        <div className="header">
            <input type="button" name="" value="+" className="add-btn" onClick={addElement} />
        </div>
    );
}
