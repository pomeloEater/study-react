const imgStyle = {
  width: "150px",
};

const CatItem = ({ img }) => {
  return (
    <li>
      <img src={img} style={imgStyle} alt="cat" />
    </li>
  );
};

export default CatItem;
