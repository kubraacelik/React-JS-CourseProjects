import "./App.css";
import AuthContext from "./context/auth-context";
import Auth from "./Auth";
import { useState } from "react";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const loginAuth = () => {
    setAuthStatus(true);
  };

  return (
    //AuthContext'in Provider bileşenini kullanarak kapsadığı component'i(Auth) yazalım.
    //Neleri paylaşmak istiyorsam value'da belirtirim.
    <AuthContext.Provider value={{ status: { authStatus }, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
