  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const {createApp} = Vue;
 /*  {} içine parametleler için
  mount ile nereye monte edileceğini belirtiyoruz
  data diye  metot oluşturup return ile obje dönüyoruz */
 /*  değişken,obje,dizi tanımlama */
  createApp ({
   data(){
    return{
      title:"Merhaba Vuejs",
      name:"Kaan",
      surName:"Kaltakkıran",
      yas:25,
      meslek:"Yazılım Uzmanı",
      giyim:{
        renk:"mavi",
        beden:"L",
        marka:"Nike"
      },
      sehirler:["Ankara","İstanbul","İzmir","Bursa"],
    }
   }
  }).mount('#app');