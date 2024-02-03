import React from "react";

//context oluşturmak için kullanılır ve içinde tutabileceğim data yapısı bulunur.
const authContext = React.createContext({ status: null, login: () => {} });

//dışarıdan erişmek için yazılır
export default authContext;
