<template>
  <h1 class="h1">Dış Header</h1>
<!-- bu ksım div id="app" içine yazılacak -->
<!-- her şey templatein içinde olmalı -->
<!-- oluşturduğumuz componenti buraya ekleyeceğiz -->
<app-header></app-header>
<app-footer></app-footer>
</template>  
<!-- bu instance yönetmek için -->
<script>
export default {

}
</script>
<!-- scoped ile sadece bu componentte geçerli olacak css tanımlayabiliriz -->
<style scoped>
.h1{
  color: red;
}
</style>