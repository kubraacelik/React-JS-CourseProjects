import { Container, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Course from "./Course";
import ReactJS from "./images/reactjs.jpg";
import Angular from "./images/angular.jpg";
import VueJS from "./images/vuejs.jpg";
import Jquery from "./images/jquery.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <AppBar color="success">
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          {/* xs:mobil boyut, md:tablet boyutu, lg:masaüstü boyutu */}
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Google tarafından geliştirilmiştir, TypeScript ile yazılmış 
              JavaScript frameworküdür. Amacı tek sayfalık uygulamalar 
              geliştirmektir. React’a benzer mimari kullanır. Bileşenler, UI’nın
              bağımsız, yeniden kullanılabilir parçalarını temsil eder, uygulamanın farklı bölümlerini
              modüler yapar. Ancak React ve Angular’ın bileşen sistemleri birbirinden farklıdır. "
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={ReactJS}
              title="React JS"
              description="Facebook tarafından geliştirilen React, en hızlı büyüyen Javascript 
              frameworküdür. Kullanıcı arayüzü oluşturmak amacıyla kullanılır ve tek sayfalık projeler için 
              kullanılması daha uygundur. React, bileşen tabanlı bir yapı kullanır. Bu yapı sayesinde bir kodun
              yeniden kullanılmasını sağlar, işleri kolaylaştırır ve daha az kod yazılmasını sağlar."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={VueJS}
              title="Vue JS"
              description="Evan You tarafından geliştirilen Vue.js, açık kaynak kodludur ve çok tercih edilen 
              frameworklerdendir. Frontend frameworklerinin en iyi özelliklerinin birleştirilmiş halidir.
              Kullanımı kolay ve esnek yapılıdır. React ve Angular ile karşılaştıracak olursak onlar gibi karmaşık değildir,
              öğrenmesi kolaydır ve boyut olarak daha küçüktür."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Jquery}
              title="Jquery"
              description="John Resig tarafından geliştirildi, 2006'da piyasaya sürülmüştür. Web geliştirme
              süreçlerini kolaylaştırmak için tasarlanmıştır ve popülerlik kazanmıştır. Google Chrome, Mozilla Firefox gibi 
              tarayıcıların yanı sıra Internet Explorer gibi eski tarayıcılar da dahil olmak üzere çeşitli tarayıcılarla 
              çalışacak şekilde tasarlanmıştır."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
