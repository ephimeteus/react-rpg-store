import portrait  from '../../Assets/portrait.jfif'
import '../Character/character.css'

const Character = ({ name }) => {
    return (
        <div className="character">
            <img src={ portrait }></img>
            <p>{ name }</p>
        </div>
    );
};

export default Character;