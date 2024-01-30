import axios from "axios"; // dış API'lerle HTTP istekleri yapmak için kullanılan bir kütüphanedir.

//Bu kod, bir JavaScript modülü içinde axios adlı bir HTTP istemcisi kullanarak Unsplash API'sine arama yapmak için
//tasarlanmış bir fonksiyon içeriyor.
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID urX3B-eUtlrwgmdDGvUY-kt4AAaeqHybz7zbqUZBfgc", //Unsplash API'ye erişim izni sağlar ve access key yazıldı
    },
    params: {
      query: term, //query anahtarına term parametresinin değeri atanıyor. Bu, kullanıcının arama kutusuna girdiği terimi temsil eder.
    },
  });
  debugger; //hata ayıklanma
  return response.data.results; // Unsplash API'den gelen yanıt içindeki fotoğraf sonuçlarını temsil eden bir diziye erişimi sağlar.
};

//başka bir componentte kullanılmasını istiyorsak export default; yazmamız lazım
export default searchImages;
