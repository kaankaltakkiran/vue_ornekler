  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */
  createApp({
    data() {
      return {
        title: 'Döngüler ve Koşullar',
        characters: ['Mario', 'Luigi', 'Yoshi', 'To'],
        ninjas: [
          { name: 'Mario', age: 25 },
          { name: 'Luigi', age: 35 },
          { name: 'Yoshi', age: 55 },
          { name: 'To', age: 45 }
        ]
      }
    }
  }).mount('#app');
 