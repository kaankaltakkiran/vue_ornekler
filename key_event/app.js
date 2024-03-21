  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */
  createApp({
   data(){
    return{
      title:"Klavye Eventleri",
    }
   },
    methods:{
      // metotlar
       isimYaz:function(){
        console.log("İsim alanına yazıldı");
      },
      yasYaz:function(){
        console.log("Yaş alanına yazıldı");
      },
    }
  }).mount('#app');
 