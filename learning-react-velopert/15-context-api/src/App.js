import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
// import SelectColors from "./components/SelectColors";
import SelectColors from "./components/SelectColorsClass";

// const App = () => {
//   return (
//     <ColorContext.Provider value={{ color: "red" }}>
//       <div>
//         <ColorBox />
//       </div>
//     </ColorContext.Provider>
//   );
// };

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
