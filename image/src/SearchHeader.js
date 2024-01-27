import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");

  // Bu fonksiyon, formun gönderilmesini (submit) yakalamak için kullanılır.
  const handleFormSubmit = (event) => {
    //preventDefault=sayfanın yenilenmesini önler
    event.preventDefault();
    search(valueInput);
  };

  //input'ta yaptığım her değişiklikte çalışsın
  const handleChange = (event) => {
    setValue(event.target.value); //input'a girdiğim değer
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
