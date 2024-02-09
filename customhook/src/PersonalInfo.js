import React from "react";
import { useState } from "react";
import useInput from "./useInput";

function PersonalInfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  //value'nin karşılığı firstName
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitForm = (e) => {
    //Sayfanın yenilenmesini önler
    e.preventDefault();

    alert(`Merhaba ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>Ad : </label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Soyad : </label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Kaydet</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
