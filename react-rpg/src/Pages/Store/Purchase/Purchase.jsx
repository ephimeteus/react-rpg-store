import Filter from './Filter';
import CardGrid from '../../../Components/CardGrid/CardGrid';
import './Purchase.css';

const Purchase = () => {
    return (
        <div className='purchase'>
            <Filter />
            <CardGrid />
            <button>Buy</button>
        </div>
    );
};

export default Purchase;