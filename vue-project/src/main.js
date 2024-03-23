/* instanscların çalıştığı yer root instance */
import { createApp } from 'vue'
import App from './App.vue'
//oluşturduğumuz compenenti import ettik
import Header from './Header.vue'
import Footer from './Footer.vue'
const app=createApp(App);
//bu compeneniti App.vue içindeki app içine ekledik
app.component('app-header',Header);
app.component('app-footer',Footer);

app.mount('#app')
