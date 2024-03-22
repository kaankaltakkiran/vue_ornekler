  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */
  var app1=createApp({
    data(){
      return{
        title:"Birinci Uygulama Başlığı"
      }
   
    }

  }).mount('#app-1');
 //2. uygulama
    createApp({
    data(){
      return{
        title:"İkinci Uygulama Başlığı"
      }
    },
     methods:{
       changeTitle(){
         this.title="2. Başlık Değişti"
       },
       changeTitle1(){
        app1.title="1. Başlık Değişti"
      }
     }  
    }).mount('#app-2');
   