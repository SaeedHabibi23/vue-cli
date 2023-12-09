<template>
    <p v-if="age > 25">{{ message }}</p>
    <p v-else> You must be 25 years or older to view this message</p>
</template>

<script>

export default {
  name: 'Gretting-vue' , 
  props:['age'] ,
  
  data(){
    return{
      message: 'Hello World Dear in the weowefd'
    }
  }
}
</script>

<style scoped>
    p{
        color: red;
    }
</style>

