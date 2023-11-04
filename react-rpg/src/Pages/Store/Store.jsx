import { useState } from 'react';
import Header from "../../Components/Header/Header";
import CardGrid from '../../Components/CardGrid/CardGrid';
import CharacterSheet from '../Character/CharacterSheet/CharacterSheet';
import items from '../Store/_mocks/items.json'




const Store = () => {
   const [selectedCharacter, setSelectedCharacter] = useState(null);
   const onSelectCharacter = (name) => { setSelectedCharacter(name)};
   
   return (
      <>
         <CharacterSheet onSelectCharacter={onSelectCharacter} />
         <div>
            <Header />
            <CardGrid selectedCharacter={selectedCharacter} items={items} />
         </div>
      </>
   );
};

export default Store;
















