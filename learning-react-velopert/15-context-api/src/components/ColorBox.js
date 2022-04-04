// import ColorContext from "../contexts/color";
import ColorContext, { ColorConsumer } from "../contexts/color";
import React, { useContext } from "react";

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

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {/* {(value) => { */}
//       {({ state }) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               // background: value.state.color,
//               background: state.color,
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               // background: value.state.subcolor,
//               background: state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
