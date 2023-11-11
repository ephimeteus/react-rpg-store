import { useState } from 'react';
import Header from "../../Components/Header/Header";
import CardGrid from '../../Components/CardGrid/CardGrid';
import CharacterSheet from '../Character/CharacterSheet/CharacterSheet';
import items from '../Store/_mocks/items.json'


const Store = () => {
   const [selectedCharacter, setSelectedCharacter] = useState(null);
   const onSelectCharacter = (name) => { setSelectedCharacter(name)};

   let quote = 
   selectedCharacter === 'Al Jabik'
   ? 'I offer relics whose brilliance has waned, treasures reclaimed from the forsaken realms only I dare to tread.'
   : selectedCharacter === 'Miriam'
   ? 'I deal in the shadow, where hope is a fleeting memory'
   :'In the depths of my trove, madness and salvation are entwined.';
   
   return (
      <>
         <CharacterSheet onSelectCharacter={onSelectCharacter} />
         <div>
            <Header name= {selectedCharacter} quote={ quote } />
            <CardGrid selectedCharacter={selectedCharacter} items={items} />
         </div>
      </>
   );
};

export default Store;
















