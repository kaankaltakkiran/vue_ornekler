  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
const { createApp } = Vue;
 /*  {} içine parametleler için
  mount ile nereye monte edileceğini belirtiyoruz
  data diye  metot oluşturup return ile obje dönüyoruz */
 /*  değişken,obje,dizi tanımlama */
 createApp({
  data(){
    return{
     age:25,
     a:10,
    b:20,
    }
  },
  methods:{
    // metotlar
    selamla:function(name,surname){
      return "Merhaba "+name+" "+surname+" "+this.age+" yaşındasın";
    },
    toplama:function(){
      return "Toplam: "+(this.a+this.b);
    },
  }
 }).mount('#app');
