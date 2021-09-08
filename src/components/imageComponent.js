import "../styles/imageStyles.css";
const ImageComponent = (props) => {
  const { src } = props;
  return (
    <div>
      <img
        class="pic"
        style={{
          height: 170,
          width: 240,
          marginBottom: 20,
          marginRight: 24,
        }}
        src={src}
      />
    </div>
  );
};
export default ImageComponent;
