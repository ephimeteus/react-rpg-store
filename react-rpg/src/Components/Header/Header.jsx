import './Header.css';

const Header = ({ name,quote }) => {
    return (
        <div className="header">
            <div className='portrait'></div>
            <div className='quote'><h1>{ name }</h1> { quote }</div>
        </div>
    );
};

export default Header;