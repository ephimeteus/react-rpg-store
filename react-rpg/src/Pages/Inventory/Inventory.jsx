import './inventory.css';

const Inventory = ({ inventory }) => {
    return (
        <div className='inventory'>
            <div className='inventory-header'>Inventory</div>
            <ul>
                {inventory.map(
                    (item, index) => (
                        <li key={index} >
                            { item }
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Inventory;
