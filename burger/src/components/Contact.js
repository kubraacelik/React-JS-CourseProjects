import React from "react";
import ContactBurger from "../assets/contact.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactBurger})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı ve Soyadınızı Giriniz..."
            autoComplete="off"
          />
          <label>E-Mail</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen E-Mail Adresinizi Giriniz..."
            autoComplete="off"
          />
          <label>Mesajınız</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Lütfen Mesajınızı Giriniz..."
            autoComplete="off"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
