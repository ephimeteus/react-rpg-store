import './Header.css';

const Header = ({ name,description }) => {
    return (
        <div className="header">
            <div className='portrait'></div>
            <div className='quote'>"Within each of these lies a unique tale. I shall not relinquish them for a trifling sum."</div>
        </div>
    );
};

export default Header;