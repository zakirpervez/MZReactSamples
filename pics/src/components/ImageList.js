import ImageShow from "./ImageShow";

function ImageList({ images }) {
    return images.map((image) => {
        return <div key={image.id}>
            <ImageShow image={image}/>
        </div>
    })
}

export default ImageList;