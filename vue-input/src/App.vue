<template>
<!-- <add-blog></add-blog> -->
<show-blogs></show-blogs>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
export default {
  components: {
   "add-blog":AddBlog,
    "show-blogs":ShowBlogs
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
