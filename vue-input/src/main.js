import { createApp } from 'vue'
import App from './App.vue'
//!router import
import router from './routes'

/* createApp(App).mount('#app') */
const app=createApp(App);
/* global filter */
app.config.globalProperties.$filters = {
  upperGlobalFilter(title){
    return title.toUpperCase();
  }
}
//!router use
app.use(router);

app.mount('#app');

