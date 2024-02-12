import React from "react";
import EpicCrunch from "../assets/epicCrunch.jpg";
import EpicCrunch2 from "../assets/epicCrunch2.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutTop">
        <div className="imageContainer">
          <img src={EpicCrunch} alt="" />
          <img src={EpicCrunch2} alt="" />
        </div>
      </div>

      <div className="aboutBottom">
        <h1>HAKKIMIZDA</h1>
        <p>
          Birinci sınıf malzemeler, yaratıcı tarifler ve samimi bir atmosfer;
          işte EpicCrunch Burger'in sırları. Şehrin kalbinde, lezzetin
          zirvesinde konumlanan bu özel mekan, burger tutkunlarına unutulmaz bir
          deneyim sunuyor. EpicCrunch Burger, her biri özenle seçilmiş ve özel
          olarak hazırlanmış burgerleri ile tanınıyor. Her lokmada farklı bir
          lezzet patırtısı sunan menüsü, dünya mutfaklarından esinlenen özgün
          tarifleri içeriyor. Meksika'dan Asya'ya, Akdeniz'den Amerika'ya uzanan
          geniş yelpazede, her damak zevkine hitap eden bir seçenek bulunuyor.
          Mekanın iç tasarımı, sıcak renkler ve rahatlatıcı bir ambiyansla
          lezzet yolculuğunu tamamlıyor. Rustik detaylar ve modern dokunuşlar,
          EpicCrunch Burger'i hem görsel bir şölene dönüştürüyor hem de
          konuklarına evlerindeymiş gibi hissettiriyor.Burada sadece burgerler
          değil, aynı zamanda özenle seçilmiş içecekler de lezzet yolculuğunuza
          eşlik ediyor.EpicCrunch Burger, sadece bir yemek molası değil, aynı
          zamanda lezzetin ve kalitenin bir buluşma noktasıdır. Güler yüzlü
          personeli, sıcak atmosferi ve unutulmaz tatlarıyla EpicCrunch Burger,
          burger keyfini bir üst seviyeye taşıyan bir gastronomi
          destinasyonudur. Lezzet tutkunları burada, her ısırıkta bir festival
          yaşar, her siparişte bir ritim bulur.
        </p>
      </div>
    </div>
  );
};

export default About;
