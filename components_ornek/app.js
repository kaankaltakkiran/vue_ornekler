  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */

  //Global olarak tanımlama
  const element={
    // template ile html kodu yazıyoruz
   template:` <h1>Merhaba {{userName}}</h1>
  <button v-on:click="chancgeName">Chancge Name</button>
   `,
   data(){
    return{
     userName:"Kaan"
    }
   },
    methods:{
      chancgeName(){
      this.userName="Ahmet"
      }
    }
  };

  var one=createApp({
    components:{
      element
    }
  });

  one.mount('#app-1');
// 2. uygulama
  var two=createApp({
 
  });
  two.component("eleman",{
    // template ile html kodu yazıyoruz
   template:` <h1>Merhaba {{userName}}</h1>
  <button v-on:click="chancgeName">Chancge Name</button>
   `,
   data(){
    return{
     userName:"Kaan"
    }
   },
    methods:{
      chancgeName(){
      this.userName="Ahmet"
      }
    }
  });
  two.mount('#app-2');
 