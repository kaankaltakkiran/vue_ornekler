<template>
<!-- bu ksım div id="app" içine yazılacak -->
<!-- her şey templatein içinde olmalı -->
<!-- oluşturduğumuz componenti buraya ekleyeceğiz -->
<!-- v-on ile event dinleyebiliriz -->
<!-- event gelen başlık değeri updateTitle fonksiyonuna gönderilir -->
<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
<app-article v-bind:users="users"></app-article>
<app-footer v-bind:title="title"></app-footer>

</template>  
<!-- bu instance yönetmek için -->
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Article from './components/Article.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-article': Article
  },
  data(){
    return {
      title:"Merhaba Vue",
      users: [
        {name: "Gökhun", spec: "Geliştirici", show: false},
        {name: "Elif", spec: "Stratejist", show: false},
        {name: "Han", spec: "Daha bebek", show: false},
        {name: "Alper", spec: "Patron", show: false},
        {name: "Yağız", spec: "Patron yavrusu", show: false},
        {name: "Zahide", spec: "Ev hanımı", show: false},
      ]
    }
  },
methods:{
  updateTitle(newTitle){
    this.title = newTitle;
  }
},
//! Vue lifecycle hooks
// Vue instance oluşturulduğunda çalışan fonksiyonlar
// beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed
// beforeCreate: Vue instance oluşturulmadan önce çalışır
beforeCreate(){
  alert("beforeCreate");
},
// created: Vue instance oluşturulduktan sonra çalışır
created(){
  alert("created");
},
// beforeMount: Vue instance html elementine bağlanmadan önce çalışır
beforeMount(){
  alert("beforeMount");
},
// mounted: Vue instance html elementine bağlandıktan sonra çalışır
mounted(){
  alert("mounted");
},
// beforeUpdate: Vue instance güncellenmeden önce çalışır
beforeUpdate(){
  alert("beforeUpdate");
},
// updated: Vue instance güncellendikten sonra çalışır
updated(){
  alert("updated");
},
// beforeDestroy: Vue instance yok edilmeden önce çalışır
beforeDestroy(){
  alert("beforeDestroy");
},
// destroyed: Vue instance yok edildikten sonra çalışır
destroyed(){
  alert("destroyed");
}
}
</script>
<!-- scoped ile sadece bu componentte geçerli olacak css tanımlayabiliriz -->
<style scoped>
</style>