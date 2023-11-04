import './App.css';
import Store from './Pages/Store/Store';
import Container from './Components/Container/Container';
import { useState } from 'react';
import CardGrid from './Components/CardGrid/CardGrid';
import CharacterSheet from './Pages/Character/CharacterSheet/CharacterSheet';
import items from '../src/Pages/Store/_mocks/items.json'


const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const onSelectCharacter = (name) => { setSelectedCharacter(name)};

  return (
    <Container>
      <CharacterSheet onSelectCharacter={onSelectCharacter} />
      <div>
      <Store />
      <CardGrid selectedCharacter={selectedCharacter} items={items} />
      </div>
    </Container>
  );
};

export default App;
