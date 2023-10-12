import './Card.css'
import itemImage from '../../Assets/item.png'


const Card = ({ name, description }) => {
    return (
        <div className="card">
            <img src= { itemImage } ></img>
            <span>{ name }</span>
        </div>
    );
};

export default Card;