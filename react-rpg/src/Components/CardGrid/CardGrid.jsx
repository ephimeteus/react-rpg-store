import './cardgrid.css';
import Card from '../Card/Card';


const CardGrid = ({ selectedCharacter, items, buyItem }) => {

  const filteredItems = items.filter((item) => item.vendor === selectedCharacter);

  return (
    <div className="card-grid">
      { !selectedCharacter
      ? <div>Call a merchant.</div>
      : filteredItems.map((item, index) => (
        <Card 
          key={index}
          name={item.name} 
          description={item.description}
          buyItem= {buyItem}
        />
      ))}
    </div>
  );
};

export default CardGrid;