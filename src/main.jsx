import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from "./pages/Home";
import EditPage from "./pages/Edit";
import App from "./App.js";
function Main() {
  return (
    <div className="Main">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/meme-app/" element={<Homepage />} />
        <Route path="/edit"element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default Main;
