import './Card.css'
import itemImage from '../../Assets/item.png'


const Card = ({ name, description }) => {
    return (
        <div className="card">
            <img src={ itemImage } />
        <div className="description">
                <h3>{ name }</h3>
                <p>{ description }</p>
            </div>
        </div>
    );
};

export default Card;