import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      {/* butona basınca Mission component'ine gitmesini istiyorsam useNavigate kullanırım. */}
      <button onClick={() => navigate("/mission")}>Mission'a Git</button>
    </>
  );
}

export default Home;
