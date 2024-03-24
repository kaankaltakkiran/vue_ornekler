<template>
 <div id="add-blog">
        <h2>Yeni Blog Post Ekleme Formu</h2>
     <!--    form gönderilmediyse göster -->
        <form v-if="!submitted" action="#">
            <label for="title">Blog Başlığı</label>
            <input type="text" v-model.lazy="blog.title" required>

            <label for="content">Blog İçeriği</label>
            <textarea v-model.lazy="blog.content"></textarea>

            <div id="checkboxes">
                <label>Çizgi Roman</label>
                <input type="checkbox" value="Çizgi Roman" v-model="blog.categories" >

                <label>Hikaye</label>
                <input type="checkbox" value="Hikaye"v-model="blog.categories ">

                <label>Masal</label>
                <input type="checkbox" value="Masal" v-model="blog.categories">

                <label>Şiir</label>
                <input type="checkbox" value="Şiir" v-model="blog.categories">
            </div>
            <label for="author">Yazar:</label>
            <select v-model="blog.author">
                <option value="">Lütfen Yazar Seçiniz</option>
                <option v-for="author in authors" v-bind:value="author">{{ author }}</option>
            </select>
            <button  v-on:click.prevent="post">Blog'u Kaydet</button>
        </form>
        <div v-if="submitted">Form succsesfuly
        <button v-on:click="newBlog">Yeni Blog Ekle</button>
        </div>
        <div v-if="!submitted" id="preview">
            <h3>Blog Ön İzleme</h3>
            <p>Blog Başlığı: {{ blog.title }}</p>
            <p>Blog İçeriği: {{ blog.content }}</p>
            <p>Kategoriler:</p>
            <p></p>
            <ul>
              <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Yazar: {{ blog.author }}</p>

        </div>
    </div>
</template>

<script>
export default{
  data(){
    return{
    blog:{
      title:'',
      content:'',
      categories:[],
      author:''
    },
    authors: ["Gökhun", "Elif", "Han", "Alper", "Yağız", "Melih"],
    submitted: false
    }
  },
  methods:{
    post(){
       /*  bu instance tanısın diye değişkene ata */
        var self = this;
        /* veri getir ve json a çevir */
       /*  https://jsonplaceholder.typicode.com/posts */
        fetch("  https://vue-input-5f104-default-rtdb.firebaseio.com/posts.json", {

            method: "POST",
        /*     auth veya  karakter tanımlamak için kullanılır */
            headers: {
                "Content-Type": "application/json"
            },
           /*  gönderilecek veri */
      /*      json tipinde gönder  */
            body: JSON.stringify(self.blog)

        }).then((res) => res.json())
    .then((function (json) {
        console.log(json);
        self.submitted = true;
    }))
    .catch((function(err){
        console.log(err);
        self.submitted = false;
    }));
    },
    newBlog(){
      this.submitted = false;
    }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 15px;
}
#checkboxes label{
    display: inline-block;
}
</style>