<template>
  <!-- bu ksım div id="app" içine yazılacak -->
  <!-- her şey templatein içinde olmalı -->
  <div id="users">
    <ul>
<!--       click ile show durumunu dğiştiriyor ona göre içerik gösteriliyor -->
      <li v-for="user in users" v-on:click="user.show=!user.show">
        <h2>{{ user.name }}</h2>
        <p v-show="user.show">{{ user.spec }}</p>
      </li>
    </ul>
    <button v-on:click="deleteUser">Kullanıcı Sil</button>
  </div>
  </template>  
  <!-- bu instance yönetmek için -->
  <script>
export default{
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data(){
    return {

    }
  },
  methods:{
    deleteUser(){
      this.users.pop();
    }
  }
}
</script>

<style scoped>
#users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>