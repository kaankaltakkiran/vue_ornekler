<template>
  <div id="app">
    <FirstExample msg="Welcome to Your Vue.js App" userName="Kaan"/>
  </div>
</template>
<script>
import FirstExample from './components/FirstExample.vue'
export default {
  name: 'App',
  components: {
    FirstExample
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
