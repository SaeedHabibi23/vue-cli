<template>
    <h1> {{ title }} </h1>
    <a :href="link"> Go To Vue Js </a>
</template>

<script>

export default {
name: "App" , 
 
data(){
  return{
    title: 'This is the page Title',
    link: 'https://vuejs.org'
  }
}
}
</script>

