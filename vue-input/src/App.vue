<template>
  <div>
  <!--   Tanımlı routeları görüntülemek -->
    <router-view>
    </router-view>
  </div>
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
