import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  //useContext'in içine erişmem için içine AuthContext yazdım. İçindeki değerleri {} içinde belirttim.
  const { status, login } = useContext(AuthContext);
  console.log(status);

  return (
    <div>
      <h1>Giriş Yaptın Mı?</h1>
      {status ? <p>Ohoo Çoktannn</p> : <p>Hayır</p>}
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
}

export default Auth;
