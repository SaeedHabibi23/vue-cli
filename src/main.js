import { createApp } from 'vue'
import App from './App.vue'
// import Gretting from "@/components/Gretting.vue"
let vm = createApp(App)

// vm.component("Gretting" , Gretting)

vm.mount('#app')
