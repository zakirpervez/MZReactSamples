import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ images }) {
    const renderList = images.map((image) => {
        return <div key={image.id}>
            <ImageShow image={image}/>
        </div>
    });
    return <div className="image-list">
        {renderList}
    </div>
}

export default ImageList;