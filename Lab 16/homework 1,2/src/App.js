import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./components/Main";
import FirstArticle from "./components/Earlife";
import SecondArticle from "./components/Film";
import Header from "./components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*" element={<Main/>} />
          <Route path="Earlife" element={<FirstArticle/>}/>
          <Route path="Film" element={<SecondArticle/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}