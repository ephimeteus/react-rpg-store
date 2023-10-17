import './cardgrid.css';
import Card from '../Card/Card';
import items from '../../Pages/Store/_mocks/items.json';

const CardGrid = () => {
  return (
    <div className="card-grid">
      {items.map(
        (item, index) => (
          <Card key={index} name={item.name} description={item.description} />
        )
      )};
    </div>
  );
};

export default CardGrid;