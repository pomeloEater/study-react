import MyComponent from "./MyComponentFunctional";

const App = () => {
  // return <MyComponent />;
  // return <MyComponent name="React" />;
  // return <MyComponent>리액트</MyComponent>;

  /*
    name={3}은 PropTypes.number이다
    Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `MyComponent`, expected `string`.
  */
  /*
    Warning: Failed prop type: The prop `favoriteNumber` is marked as required in `MyComponent`,
    but its value is `undefined`.
  */
  // return <MyComponent name={3}>리액트</MyComponent>;
  return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;
