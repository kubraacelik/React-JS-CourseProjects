import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// GeneralFrom için olan kısım
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email formatı giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});

// PortalForm için olan kısım
export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı Adı minimum 3 karakter uzunluğunda olmalıdır")
    .required("Kullanıcı Adı zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen Üniversitenizi Seçiniz ")
    .required("Lütfen üniversitenizi seçin"),
  isAccepted: yup
    .boolean()
    .oneOf([true], "Lütfen kullanım koşullarını kabul ediniz"),
});
