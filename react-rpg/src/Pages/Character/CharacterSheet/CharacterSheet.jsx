import Character from "../Character";
import '../CharacterSheet/characterSheet.css'

const CharacterSheet = ({ onSelectCharacter }) => {
    return (
        <div className="character-sheet">
            <Character name='Al Jabik' onSelectCharacter={onSelectCharacter} />
            <Character name='Miriam' onSelectCharacter={onSelectCharacter} />
            <Character name='Odok' onSelectCharacter={onSelectCharacter}/>
        </div>
    );
};

export default CharacterSheet;