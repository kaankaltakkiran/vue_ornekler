<template>
  <div>
    <app-header></app-header>
  <!--   Tanımlı routeları görüntülemek -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import ListBlogs from './components/ListBlogs.vue'
import Header from './components/Header.vue' 
export default {
  components: {
   "add-blog":AddBlog,
    "show-blogs":ShowBlogs,
    "list-blogs":ListBlogs,
    "app-header":Header
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
