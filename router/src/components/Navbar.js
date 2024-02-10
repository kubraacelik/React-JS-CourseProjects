import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    //navbar = gezinme çubuğu
    <nav className="mainNav">
      {/* Link'i alırken react-router-dom'dan almaya dikkat et */}
      {/* Link'teki to, App kısmındaki path'e karşılık geliyor */}
      {/* <Link to="/">Home</Link>
      <Link to="/aboutUs">About</Link> */}

      {/* NavLink demek navbarda hangisine bastıysan onu aktif olarak gösterir. css'te düzenleyebilirsin */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">About</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}

export default Navbar;
