import { Routes, Route } from "react-router-dom";
import Simulator from "./containers/Simulator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Simulator />} />
      </Routes>
    </>
  );
}

export default App;
