import PropTypes from 'prop-types';

const Rank = ({ newUser }) => {
    return (
   <div>
    <div className="white f3">
    {`${newUser.name}, your current entry count is `}
    </div>
    <div className="white f1">
        {`#${newUser.entries}`}
    </div>
   </div>
    );
}

Rank.propTypes = {
    newUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    entries: PropTypes.number.isRequired
}).isRequired
}
export default Rank;