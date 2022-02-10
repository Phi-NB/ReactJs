import logo from './logo.svg';
import './App.css';
import React from 'react'

let name = 'Nguyễn Bá Phi'
// function App() {
//   return (
//     <div className="App">
//       <h2>{name}</h2>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello! {name}</h1>
      </div>
    );
  }
}

export default App;
