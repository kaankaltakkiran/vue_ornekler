<template>
  <!-- bu ksım div id="app" içine yazılacak -->
  <!-- her şey templatein içinde olmalı -->
  <h1 class="h1">İç Header</h1>
  <ul>
   <li v-for="item in items">{{ item }}</li>
  </ul>
  </template>  
  <!-- bu instance yönetmek için -->
  <script>
  export default {
   data(){
    return{
     items: ['Home', 'About', 'Contact']}
   }
  }
  </script>
<style>
.h1{
  color: rgb(0, 119, 255);
}
</style>