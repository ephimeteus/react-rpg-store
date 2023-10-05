import './Card.css'
import itemImage from '../../Assets/item.png'


const Card = () => {
    return (
        <div className="card">
            <img src= { itemImage } ></img>
        </div>
    );
};

export default Card;