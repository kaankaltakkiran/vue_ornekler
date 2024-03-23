<template>
<alt-component>
 <!--  gönderilen html -->
<!--  isimlendirmiş slot -->
 <template #Title>
  <h2>Alt Compenent Title</h2>
</template>
<template #Paragraph>
  <p>Alt Component Paragraph</p>
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
</style>
