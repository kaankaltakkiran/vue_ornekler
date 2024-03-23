<template>
<alt-component>
 <!--  gönderilen html -->
<!--  isimlendirmiş slot -->
<template #form-header>
      <h2>Giriş Formu</h2>
      <p>Giriş yapabilmek için lütfen formu doldurun</p>
      <p v-bind:class="$style.blue">örnek stlye module kullanımı</p>
      <p v-bind:class="xbilesen.green">örnek stlye module kullanımı</p>
    </template>

    <template #form-elements>
      <label for="email">E-Posta</label>
      <input type="email" name="email" placeholder="E-posta adresinizi giriniz">

      <label for="password">Şifre</label>
      <input type="password" name="password" placeholder="Şifrenizi giriniz">
    </template>

    <template #form-controls>
      <button>Giriş Yap</button>
    </template>

    <template>
      <p>Tüm Hakları Saklıdır. kaan baa</p>
    </template>

</alt-component>
</template>

<script>
import AltComponent from './components/AltComponent.vue'
export default{
  components:{
    "alt-component":AltComponent
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
:global(h2){color:red}
:deep(input){width:100%; border:1px solid #e2e2e2; height:35px; border-radius: 5px; margin:5px 0 15px 0; padding-left:15px}
</style>

<style module>
.blue{color: blue;}
</style>

<style module="xbilesen">
.green{color: green;}
</style>