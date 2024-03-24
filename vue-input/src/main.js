

import { createApp } from 'vue'
import App from './App.vue'

/* createApp(App).mount('#app') */
const app=createApp(App);
/* global filter */
app.config.globalProperties.$filters = {
  upperGlobalFilter(title){
    return title.toUpperCase();
  }
}
app.mount('#app');

