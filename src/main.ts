import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import Smartisan from '@/packages/index'
// import Smartisan from '../dist/smartisan-ui.es.js'
// import '../dist/style.css'
document.body.addEventListener('touchstart', function () { });

let app = createApp(App)

app
.use(router)
.use(Smartisan)
// .use(Button)
.mount('#app')
