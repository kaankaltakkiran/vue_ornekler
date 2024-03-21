  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */
  createApp({
    data(){
      return{
        title:"Computed Property",
        a:0,
        b:0,
        age:25
      }
    },
    methods:{
      
    },
    computed:{
      aEkle(){
        console.log("aEkle çalıştı");
        return this.a+this.age;
      },
      bEkle(){
        console.log("bEkle çalıştı");
        return this.b+this.age;
      }
    }
  }).mount('#app');
 