  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */
  createApp({
   data(){
    return{
    }
   },
   methods:{
    readref(){
      //this.$refs ile tüm referansları görebiliriz
      //this.$refs.icerik ile icerik adında verdiğimiz referansı görebiliriz
      //this.$refs.icerik.value ile icerik adındaki referansın value değerini görebiliriz
       console.log(this.$refs.icerik.value);
       //this.$refs.icerik2.innerHTML ile icerik2 adındaki referansın içeriğini görebiliriz 
      console.log(this.$refs.icerik2.innerHTML);
    }
   }
  }).mount('#app');
 