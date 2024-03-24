<script setup>
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>
<template>
  <div id="single-blog">
    <h2 v-rainbow>{{$filters.upperGlobalFilter(blog.title) }} </h2>
    <p>Content: {{ blog.body }} </p>
  </div>
</template>
<script>
import mixins from "../mixins";
export default {
  data() {
    return {
    /*  routedan gelen id */
    id: this.$route.params.id,
    blog: {}
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
    fetch("https://jsonplaceholder.typicode.com/posts/"+self.id, {
      method: "GET",
      headers: {
        "Content-Type": "content/type"
      },
    }).then((res) => res.json())
      .then((function (json) {
        console.log(json);
        self.blog = json;
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
#single-blog{
    width: 960px;
    margin:10px auto;
}
</style>