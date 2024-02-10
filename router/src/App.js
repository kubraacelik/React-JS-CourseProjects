import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Company from "./components/Company";
import Team from "./components/Team";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
import React from "react";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Kapsayıcı olarak Routes, yönlendirme yapmak için Route kullandık */}
      {/* local 3000'deyken Home component'i çalışsın */}
      {/* aboutUs url'sinde AboutUs component'i çalışsın */}
      {/* path="*" demek benim belirttiğim path'ler harici başka bir şey yazılırsa WrongPath component'ine gitsin diyorum */}
      {/* iç içe router yapmak için <Route></Route> yapıp içine tekrar <Route/> olarak eklemeliyiz. Kapsayıcı Route'in componentine gidip Outlet'i import etmeliyiz */}
      {/* localhost:3000/members/1 veya sona herhangi bir sayı yazınca onun gelmesi için path="/members/:memberId" yazarız */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberId" element={<MemberDetail />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
