import './imagelinkform.css';

const ImageLinkForm = () => {
    return (
   <div>
    <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
    </p>
    <div className="center ">
        <div className="form center pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type="tex"/>
            <button className="w-30 grow ph3  dib bg-light-red">Detect</button>
        </div>
    </div>
   </div>
    );
}

export default ImageLinkForm;