// Windows Users: As of Dec. 2021, there is an issue with create-react-app in Windows.
// If you run npm start with a React app in Git Bash, there will be a path error due to the way Git Bash handles paths.
// To get around this, you can either use VSCode's terminal, or once you run npm start, open package.json...
// ...make a minor change then delete that change, and save.
// This will reload the application without errors.

import "./App.css";
import { useState } from "react";
import MoleContainer from "./components/MoleContainer";

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div>{hills}</div>;
  };

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
