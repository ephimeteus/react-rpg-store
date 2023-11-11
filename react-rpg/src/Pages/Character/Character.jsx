import portrait  from '../../Assets/portrait.jfif'
import '../Character/character.css'

const Character = ({ name, onSelectCharacter }) => {
    return (
      <div className="character" onClick={() => onSelectCharacter(name)}>
        <img src={portrait} alt={name} />
        <p>{name}</p>
      </div>
    );
  };

export default Character;