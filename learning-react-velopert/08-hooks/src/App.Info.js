// import React, { useState } from "react";
// import Info from "./Info";
// import Info from "./InfoUseReducer";
import Info from "./InfoUseInputs";

const App = () => {
  return <Info />;
};

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

export default App;
