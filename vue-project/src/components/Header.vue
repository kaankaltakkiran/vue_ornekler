<template>
  <!-- bu ksım div id="app" içine yazılacak -->
  <!-- her şey templatein içinde olmalı -->
  <header>
      <h1>Sayfamızın Başlığı</h1>
    </header>
  </template>  
  <!-- bu instance yönetmek için -->
  <script>
  export default {
   data(){
    return{
    }
   }
  }
  </script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>