import { Routes, Route } from "react-router-dom";
import IndexPage from "./page/IndexPage.js";
import DetailPage from "./page/DetailPage.js";
import LoginPage from "./page/LoginPage.js";
import AddPostPage from "./page/AddPostPage.js";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/addPost" element={<AddPostPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;