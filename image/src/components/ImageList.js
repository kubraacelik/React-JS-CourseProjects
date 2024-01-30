import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {/* imagesPlaceholder içindeki her bir resme image dedik */}
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
