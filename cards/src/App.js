import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-danger">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Google tarafından geliştirilen bir JavaScript framework'üdür. Web uygulamaları geliştirmek için 
                             kullanılan açık kaynaklı bir platformdur. Dinamik, tek sayfalı ve yüksek performanslı 
                             web uygulamaları oluşturmak ve kullanıcı arayüzü geliştirmek için kullanılır. HTML, CSS ve 
                             TypeScript'i bir araya getirir."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap"
                description="Twitter tarafından geliştirilen açık kaynaklı bir CSS ve JavaScript kütüphanesidir. Web uygulamaları 
                             ve mobil uygulamaların hızlı ve etkili bir şekilde tasarlanması için kullanılan bir araçtır.
                             Bootstrap, önceden tasarlanmış stiller, düzenler ve bileşenler içerir, bu sayede kullanıcı 
                             arayüzü tasarımını daha kolay ve tutarlı hale getirir."
              />
            </div>
            <div className="column">
              <Course
                image={Ccsharp}
                title="Komple Web"
                description="Web, internet üzerinde bilgi paylaşımını sağlayan küresel ağdır. HTML gibi dillerle oluşturulan web sayfaları, tarayıcılarla
                             görüntülenir. Kullanıcıların eğlence, eğitim, ticaret ve iletişim gibi alanlarda faaliyet 
                             göstermelerine olanak tanır. Güvenlik, web tasarımı, webin evrimini, protokollerini ve geliştirme teknolojilerini kapsar. "
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Frontend, bir bilgisayar programının veya web uygulamasının kullanıcı arayüzünün, kullanıcının 
                             etkileşimde bulunduğu ve deneyimlediği kısmını ifade eder. HTML, CSS ve JavaScript gibi teknolojileri 
                             içerir. Bu teknolojiler, web sayfalarının düzenini ve etkileşimini belirler."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
