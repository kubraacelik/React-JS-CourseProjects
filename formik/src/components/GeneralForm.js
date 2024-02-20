import React from "react";
import { useFormik } from "formik";
import "../App.css";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

//submit ile ilgili ayarlamalarımız burada olacak.
//values = input'a girdiğim değerler, actions = form resetleme gibi aksiyonlar yer alıyor.
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  //butona tekrar 1 sn sonra basabilirim ve butona bastıktan 1 sn sonra form temizlenecek
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  //console.log(formik);
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>E-Mail</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mail adresinizi giriniz"
          autoComplete="off"
          // email yanlış girilmişse input-error class'ını ver
          className={errors.email ? "input-error" : ""}
        />
        {/* email yazılmamışsa error class'ını ver, hata mesajı ver */}
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı giriniz"
          // yaş yanlış girilmişse input-error class'ını ver
          className={errors.age ? "input-error" : ""}
        />
        {/* yaş yazılmamışsa hata mesajı ver */}
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Şifrenizi giriniz"
          // şifre yanlış girilmişse input-error class'ını ver
          className={errors.password ? "input-error" : ""}
        />
        {/* şifre yazılmamışsa hata mesajı ver */}
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz"
          // şifre yanlış girilmişse input-error class'ını ver
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {/* şifre yazılmamışsa hata mesajı ver */}
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      {/* işlem bitene kadar butona basılmasın */}
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="formLink" to="/portal">
        Portala Git
      </Link>
    </form>
  );
}
export default GeneralForm;
