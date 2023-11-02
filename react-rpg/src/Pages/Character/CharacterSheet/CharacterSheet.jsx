import Character from "../Character";
import '../CharacterSheet/characterSheet.css'

const CharacterSheet = () => {
    return (
        <div className="character-sheet">
            <Character name='Al Jabik' />
            <Character name='Miriam' />
            <Character name='Odok' />
        </div>
    );
};

export default CharacterSheet;