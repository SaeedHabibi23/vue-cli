<template>
  <select name="" id="" v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <component :is="componentName">  </component>
</template>

<script>
import About from "./components/about.vue";
import Home from "./components/Home.vue"
export default {
name: "App" , 
components:{
  About , 
  Home
} , 
data(){
  return{
    componentName: "Home"
  }
}
}
</script>

