<template>
<add-blog></add-blog>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
export default {
  components: {
   "add-blog":AddBlog
  },
  data() {
    return {
      message: 'Hello Vue!',
    }
  }
}
</script>
<style scoped>
</style>
