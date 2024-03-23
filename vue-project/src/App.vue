<template>
<!-- bu ksım div id="app" içine yazılacak -->
<!-- her şey templatein içinde olmalı -->
{{ message }}
<button v-on:click="changeMessage">Change Message</button>
</template>  
<!-- bu instance yönetmek için -->
<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Hello World!'
    }
  }
}
</script>
