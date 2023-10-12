import './Card.css'
import itemImage from '../../Assets/item.png'


const Card = ({ name, description }) => {
    return (
        <div className="card">
            <img src={ itemImage } />
            <h3>{ name }</h3>
            <div className="description">
                <p>{ description }</p>
            </div>
        </div>
    );
};

export default Card;