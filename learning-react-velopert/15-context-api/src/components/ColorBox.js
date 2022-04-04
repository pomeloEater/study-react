import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {/* Function as a child (Render Props) */}
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
