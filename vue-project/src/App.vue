<template>
<!-- bu ksım div id="app" içine yazılacak -->
<!-- her şey templatein içinde olmalı -->
<!-- oluşturduğumuz componenti buraya ekleyeceğiz -->
<app-header></app-header>
<app-article></app-article>
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
    }
  }

}
</script>
<!-- scoped ile sadece bu componentte geçerli olacak css tanımlayabiliriz -->
<style scoped>
</style>