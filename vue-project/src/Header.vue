<template>
  <!-- bu ksım div id="app" içine yazılacak -->
  <!-- her şey templatein içinde olmalı -->
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
  