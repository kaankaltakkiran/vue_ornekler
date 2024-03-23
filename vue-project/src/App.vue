<template>
<!-- bu ksım div id="app" içine yazılacak -->
<!-- her şey templatein içinde olmalı -->
<!-- oluşturduğumuz componenti buraya ekleyeceğiz -->
<app-header v-bind:title="title"></app-header>
<app-article v-bind:users="users"></app-article>
<app-footer></app-footer>

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
  }

}
</script>
<!-- scoped ile sadece bu componentte geçerli olacak css tanımlayabiliriz -->
<style scoped>
</style>