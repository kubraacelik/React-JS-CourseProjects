import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  //tüm kurslarımın olduğu state
  const [courses, setCourses] = useState([]);
  //başta yükleniyor olması için true dedik
  const [loading, setLoading] = useState(true);

  //Sil butonuna basınca çalışacak kısım
  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    //başlangıçta da yükleniyor görünsün
    setLoading(true);
    try {
      //api'den verileri aldık
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      //kurslarım yüklenince loading olmasın false olsun
      setLoading(false);
    } catch (error) {
      //hata varsa veya bekleme süresinde ne olsun
      setLoading(false);
    }

    debugger;
  };

  useEffect(() => {
    //backend'e istek atacak fonksiyon
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {/* loading true ise Loading component'i, false ise ve eğer kursların hepsini silersek bir açıklama ve yenile butonu
       ve yenile butonu çıkacak. O butona basınca tekrar kurslaeın hepsi çıkacak */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refleshDiv">
              <h1>Kursların Hepsini Sildiniz!</h1>
              <button
                className="cardDeleteBtn"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
