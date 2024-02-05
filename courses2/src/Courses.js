import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//! Tüm kurslarımın bulunduğu component
function Courses({ courses, removeCourse }) {
  //Ekrana gelecek olan tek kart için yapıldı
  const [index, setIndex] = useState(2);

  //Ekrana gelen index'in content, title ve price'ını getir
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    //eğer index 0 yani ilk eleman ise geriye gidince eleman olmadığı için hata verir.
    //O yüzden 5. elemana yani 4.index'e gitmesini sağladım.
    //eğer index 5-1 4'ten büyük ise ilk elemana yani 0. index'e gelsin
    //ikisi de değilse normal geriye veya ileriye gidebilir.O yüzden return index döndürdüm.
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  //! Geri butonuna basınca çalışacak kısım. Bir önceki index numarasına gidecek.
  //! Kontrol için checkIndex'e gidecek
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  //!

  //! İleri butonuna basınca çalışacak kısım. Bir sonraki index numarasına gidecek.
  //! Kontrol için checkIndex'e gidecek
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  //! Rastgele kurs ata butonuna basınca çalışacak kısım
  const getRandomCourse = () => {
    //kurs sayısı kadar rastgele sayı üretiyor ve ekrana onu getiriyor
    let randomNumber = Math.floor(Math.random() * courses.length);
    //eğer ekranda o kurs varsa aynısını getirme bir sonraki kursu getir
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    //checkIndex'te kontrol et ve random number'ı çalıştır
    setIndex(checkIndex(randomNumber));
  };

  return (
    <div className="courseMainDiv">
      <div className="courseTitleAndButton">
        <h1>Kurslarım</h1>
        <button className="randomBtn" onClick={getRandomCourse}>
          Rastgele Kurs Ata
        </button>
      </div>
      <div className="cardDiv">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
          </div>
          <p>{content}</p>
          <div></div>
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
