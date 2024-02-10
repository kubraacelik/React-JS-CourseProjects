import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>;
      <button onClick={() => navigate("/")}>Geriye Dön</button>
      {/* 2.Yöntem'i
      <button onClick={() => navigate(-1)}>Geriye Dön</button> */}
    </>
  );
}

export default Mission;
