import { Routes, Route } from "react-router-dom";
import IndexPage from "./page/IndexPage.js";
import DetailPage from "./page/DetailPage.js";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;