<template>
  <!-- bu ksım div id="app" içine yazılacak -->
  <!-- her şey templatein içinde olmalı -->
  <footer>
    <p>{{copyright}} {{year}} {{ title }}</p>
  </footer>
  </template>  
  <!-- bu instance yönetmek için -->
  <script>
  export default {
    props:{
      title:{
        type:String,
        required:true
      }
    },
    data(){
    return {
      copyright: "Tüm Hakları Saklıdır. (c)",
      year: 2024
    }
  }
}
  </script>

 <style scoped>
 footer{
   background: #222;
   padding: 6px;
 }
 p{
   color: lightgreen;
   text-align: center;
 }
 </style>