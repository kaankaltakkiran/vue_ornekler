  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */
  createApp({
  data(){
    return{
      title:"Çift yönde veri bağlama",
      userName:"Kaan",
      age:25,
    }
  }
  }).mount('#app');
 