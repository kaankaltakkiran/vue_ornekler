<template>
<!-- <add-blog></add-blog> -->
<show-blogs></show-blogs>
<list-blogs></list-blogs>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import ListBlogs from './components/ListBlogs.vue'
export default {
  components: {
   "add-blog":AddBlog,
    "show-blogs":ShowBlogs,
    "list-blogs":ListBlogs
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
