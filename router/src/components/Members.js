import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setsearchParams] = useSearchParams();
  //filtre aktif mi değil mi onu öğrenelim
  const isActive = searchParams.get("filter") === "active";

  return (
    <>
      <div>Members</div>
      <button onClick={() => setsearchParams({ filter: "active" })}>
        Aktif Üyeler
      </button>
      <button onClick={() => setsearchParams()}>Tüm Üyeler</button>
      {isActive ? <h2>Aktif Üyeler</h2> : <h2>Tüm Üyeler</h2>}
    </>
  );
}

export default Members;
