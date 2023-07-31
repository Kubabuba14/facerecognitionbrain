import PropTypes from 'prop-types';
import './imagelinkform.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, input }) => {
    return (
   <div>
    <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
    </p>
    <div className="center ">
        <div className="form center pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" 
            type="text" 
            value= {input}
            onChange={onInputChange}/>

            <button 
            className="w-30 grow ph3  dib bg-light-red"
            onClick={onButtonSubmit}
            >Detect</button>

        </div>
    </div>
   </div>
    );
};

ImageLinkForm.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onButtonSubmit: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
};

export default ImageLinkForm;