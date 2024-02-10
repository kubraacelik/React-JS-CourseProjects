import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Kapsayıcı olarak Routes, yönlendirme yapmak için Route kullandık */}
      {/* local 3000'deyken Home component'i çalışsın */}
      {/* aboutUs url'sinde AboutUs component'i çalışsın */}
      {/* path="*" demek benim belirttiğim path'ler harici başka bir şey yazılırsa WrongPath component'ine gitsin diyorum */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
