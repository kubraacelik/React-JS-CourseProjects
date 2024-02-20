import { useField } from "formik";
import React from "react";

// ...props = PortalForm'da props olarak geçtiğim name, type ve placeholder
function CustomSelect({ label, ...props }) {
  // field = name bilgisi, onChange, onBlur, value özellikleri var
  // meta = error var
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        // error, meta'nın içinde olduğundan bu şekil aldık
        className={meta.error ? "input-error" : ""}
      />

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;
