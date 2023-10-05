import './Card.css'
import itemImage from '../../Assets/item.png'


const Card = () => {
    return (
        <div className="card">
            <img src= { itemImage } ></img>
            <p>Item name</p>
        </div>
    );
};

export default Card;