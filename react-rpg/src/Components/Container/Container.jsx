import './container.css';

const Container = ( props ) => {
    let { children } = props;
    return (
        <div className='container'>
            { children }
        </div>
    );
};

export default Container;
