  // Vudeki CreateApp fonksiyonunu kullanarak bir uygulama oluşturuyoruz
  const { createApp } = Vue;
  /*  {} içine parametleler için
   mount ile nereye monte edileceğini belirtiyoruz
   data diye  metot oluşturup return ile obje dönüyoruz */
  /*  değişken,obje,dizi tanımlama */
  createApp({
   data(){
     return{
       title:"Eventler",
       age:25,
       x:0,
       y:0,
       counter:0,
     }
   },
   methods:{
     arttır:function(){
       this.age++;
     },
     azalt:function(){
       this.age--;
     },
     onarttır:function(){
       this.age+=10;
     },
     onazalt:function(){
       this.age-=10;
     },
     updateXY:function(event){
       //event içindeki offsetx ve offsety değerlerini alıyoruz
       console.log(event);
       this.x=event.offsetX;
       this.y=event.offsetY;
     },
     counterFunc(){
       this.counter++;
     },
     prevent(){
        alert("Prevent Default");
     }
   }
  }).mount('#app');
 