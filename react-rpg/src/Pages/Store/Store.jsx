import { useState } from 'react';
import Header from "../../Components/Header/Header";
import CardGrid from '../../Components/CardGrid/CardGrid';
import CharacterSheet from '../Character/CharacterSheet/CharacterSheet';
import data from '../Store/_mocks/items.json'
import Inventory from '../Inventory/Inventory';


const Store = () => {
   
   const [items, setItems] = useState(data);

   const [selectedCharacter, setSelectedCharacter] = useState(null);
   const onSelectCharacter = (name) => { setSelectedCharacter(name)};

   const [inventory, setInventory] = useState([]);
   const buyItem = (itemName) => {
      setInventory((prevItems) => [...prevItems, itemName]);
      setItems((prevItems) => prevItems.filter((currItem) => currItem.name !== itemName ));
      console.log(items);
    };

   

   let quote = 
   selectedCharacter === 'Al Jabik'
   ? 'I offer relics whose brilliance has waned, treasures reclaimed from the forsaken realms only I dare to tread.'
   : selectedCharacter === 'Miriam'
   ? 'I deal in the shadow, where hope is a fleeting memory'
   : selectedCharacter === 'Odok'
   ? 'In the depths of my trove, madness and salvation are entwined.'
   : 'Call a Merchant.';
   
   return (
      <>
         <CharacterSheet onSelectCharacter={onSelectCharacter} />
         <div>
            <Header name= {selectedCharacter} quote={ quote } />
            <CardGrid selectedCharacter={selectedCharacter} items={items} buyItem={buyItem} />
         </div>
         <Inventory inventory={inventory} />
      </>
   );
};

export default Store;
















