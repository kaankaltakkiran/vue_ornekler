<script setup>
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>
<template>
  <div id="show-blogs">
    <h1>Blogs Title List</h1>
    <input type="text" v-model="keyword" placeholder="Search for blog title" />
    <div class="single-blog" v-for="blog in filtredBlogs">
    <h2 v-rainbow>{{$filters.upperGlobalFilter(blog.title) }} </h2>
  </div>
  </div>
</template>
<script>
import mixins from "../mixins";
export default {
  data() {
    return {
      blogs: [],
      keyword: "",
    };
  },
  methods: {
    // methodler buraya
    upperTitle(title) {
      return title.toUpperCase();
    }
  },
  computed: {
    // computed buraya
    lowerTitle() {
      return (title) => title.toLowerCase();
    },
  },
  /* instance oluştuğunda çalışır */
  created() {
    // instance bilgilerini al 
    var self = this;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "content/type"
      },
    }).then((res) => res.json())
      .then((function (json) {
        console.log(json);
        /* 10 tanesini al * slice ile */
        self.blogs = json.slice(0, 10);
      }))
      .catch((function (err) {
        console.log(err);
      }));
  },
  //dosya adlari gelir buraya
  mixins: [mixins],
};
</script>


<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #e2e2e2;
    border-radius: 5px;
}
</style>