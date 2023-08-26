


import React, { useState, useEffect } from 'react';
import './index.css'; 



const initialData = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats',
};

const App = () => {
  const [data, setData] = useState(initialData);
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    const combinedText = Object.keys(data)
      .map((key) => `${data[key]}`)
      .join(', ');

    setOutputText(combinedText);
  }, [data]);

  const handleInputChange = (event, key) => {
    setData({
      ...data,
      [key]: event.target.value,
    });
  };

  return (
    <div className="input-container">
      {Object.keys(initialData).map((key) => (
        <input
          key={key}
          className="input-field"
          type="text"
          placeholder={key}
          value={data[key]}
          onChange={(event) => handleInputChange(event, key)}
        />
      ))}
      <div className="output-text">{outputText}</div>
    </div>
  );
};

export default App;














// тут у меня принцеп dry я его тоже написал сам для себя  а там уже судите как знаете 

// import React, { useState, useEffect } from 'react';
// import './index.css';

// const initialData = {
//   key1: 'Barbara',
//   key2: 'Hepworth',
//   key3: 'bhepworth@react.com',
//   key4: 'love cats',
// };

// const App = () => {
//   const [data, setData] = useState(initialData);
//   const [outputText, setOutputText] = useState('');

//   useEffect(() => {
//     const combinedText = Object.keys(data)
//       .filter((key) => key !== 'key1')
//       .map((key) => data[key])
//       .join(', ');

//     setOutputText(combinedText);
//   }, [data]);

//   const handleInputChange = (event, key) => {
//     setData({
//       ...data,
//       [key]: event.target.value,
//     });
//   };

//   const renderInputs = () => {
//     return Object.keys(initialData).map((key) => (
//       <input
//         key={key}
//         className="input-field"
//         type="text"
//         placeholder={key}
//         value={data[key]}
//         onChange={(event) => handleInputChange(event, key)}
//       />
//     ));
//   };

//   return (
//     <div className="input-container">
//       {renderInputs()}
//       <div className="output-text">{outputText}</div>
//     </div>
//   );
// };

// export default App;
