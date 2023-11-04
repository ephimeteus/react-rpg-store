import './Header.css';

const Header = ({ name,description }) => {
    return (
        <div className="header">
            <div className='portrait'></div>
            <div className='quote'>"I paid their price in blood. I shall not relinquish them for a trifling sum."</div>
        </div>
    );
};

export default Header;