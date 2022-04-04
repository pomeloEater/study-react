// import ColorContext from "../contexts/color";
import { ColorConsumer } from "../contexts/color";

// const ColorBox = () => {
//   return (
//     <ColorContext.Consumer>
//       {/* Function as a child (Render Props) */}
//       {(value) => (
//         <div
//           style={{
//             width: "64px",
//             height: "64px",
//             background: value.color,
//           }}
//         />
//       )}
//     </ColorContext.Consumer>
//   );
// };

const ColorBox = () => {
  return (
    <ColorConsumer>
      {/* {(value) => { */}
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              // background: value.state.color,
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              // background: value.state.subcolor,
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
