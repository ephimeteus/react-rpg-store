import './cardgrid.css';
import Card from '../Card/Card';


const CardGrid = ({ selectedCharacter, items }) => {

  if (selectedCharacter === null) {
    return <div className="card-grid">Please select a character.</div>;
  };

  const filteredItems = items.filter((item) => item.vendor === selectedCharacter);

  return (
    <div className="card-grid">
      {filteredItems.map((item, index) => (
        <Card 
          key={index}
          name={item.name} 
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;