<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{userName}}  Nasılsın?</p>
  </div>
</template>


<script>
export default {
  name: 'FirstExample',
  props: {
    msg: String,
    userName: String
  }
}
</script>

