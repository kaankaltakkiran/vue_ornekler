  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
const { createApp } = Vue;
 /*  {} içine parametleler için
  mount ile nereye monte edileceğini belirtiyoruz
  data diye  metot oluşturup return ile obje dönüyoruz */
 /*  değişken,obje,dizi tanımlama */
 createApp({
  data(){
    return{
      userName:"Kaan",
      job:"Developer",
      website:"https://vuejs.org/",
      websiteTag:'<a href="https://vuejs.org/">Vue.js</a>',
      age:25,
    }
  }
 }).mount('#app');
