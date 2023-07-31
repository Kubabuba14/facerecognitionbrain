import PropTypes from 'prop-types';
import './facerecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
    <div className='center ma'>
        <div className="absolute mt2">
        <img alt='' id='inputimage' src={imageUrl} width='500px' height='auto' />
        <div className='bounding-box' 
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol }}></div>
        </div>
        </div>
    );
}
FaceRecognition.propTypes = {
    imageUrl: PropTypes.string.isRequired, 
    box: PropTypes.shape({
        topRow: PropTypes.number.isRequired,
        rightCol: PropTypes.number.isRequired,
        bottomRow: PropTypes.number.isRequired,
        leftCol: PropTypes.number.isRequired,
    }).isRequired,
  };

export default FaceRecognition;