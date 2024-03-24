export default{
  computed: {
    filtredBlogs(){
      /*  tüm blogları bul ve bu keyword ile filtrele */
       return this.blogs.filter((blog) => {
         return blog.title.match(this.keyword);
       });
     }
  },
}