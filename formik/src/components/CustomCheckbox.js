import { useField } from "formik";
import React from "react";

// ...props = PortalForm'da props olarak geçtiğim name, type ve placeholder
function CustomCheckbox({ label, ...props }) {
  // field = name bilgisi, onChange, onBlur, value özellikleri var
  // meta = error var
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          // error, meta'nın içinde olduğundan bu şekil aldık
          className={meta.error ? "input-error" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
