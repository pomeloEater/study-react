import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  /*
    const onClick = () => {
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
        setData(res.data);
      });
    };
  */
  const onClick = async () => {
    try {
      // const response = await axios.get(
      //   'https://jsonplaceholder.typicode.com/todos/1',
      // );
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=4e80b504bedd477fb90b0e026771eec6',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
