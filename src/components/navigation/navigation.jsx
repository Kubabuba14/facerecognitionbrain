import PropTypes from 'prop-types';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
    );
}

Navigation.propTypes = {
    onRouteChange: PropTypes.func.isRequired,
}

export default Navigation;
