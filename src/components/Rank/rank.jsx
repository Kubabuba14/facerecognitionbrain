import PropTypes from 'prop-types';

const Rank = ({ name, entries }) => {
    return (
   <div>
    <div className="white f3">
    {`${name}, your current rank is ${entries}`}
    </div>
    <div className="white f1">
        {'#5'}
    </div>
   </div>
    );
}

Rank.propTypes = {
    name: PropTypes.string.isRequired,
    entries: PropTypes.number.isRequired
  }

export default Rank;