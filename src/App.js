import "./App.css";
import React from "react";

let name = "Nguyễn Bá Phi";
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
        <h1>Hello! {name} đẹp trai mỗi tội nghiện</h1>
      </div>
    );
  }
}

export default App;
