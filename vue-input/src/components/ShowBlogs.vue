<script setup>
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>
<template>
  <div id="show-blogs">
    <h1>Blogs</h1>
    <input type="text" v-model="keyword" placeholder="Search for blog title" />
    <div class="single-blog" v-for="blog in filtredBlogs">
    <router-link v-bind:to="'/blog/'+blog.id"> <h2 v-rainbow>{{$filters.upperGlobalFilter(blog.title) }} </h2></router-link>
    <p>Content: {{ blog.content }} </p>
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
    fetch("https://vue-input-5f104-default-rtdb.firebaseio.com/posts.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => res.json())
      .then((function (json) {
        //! json verisi diziye çevirilir
        var blogArray = [];
        for (let key in json) {
          json[key].id = key;
          blogArray.push(json[key]);
          self.blogs = blogArray;
        }
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