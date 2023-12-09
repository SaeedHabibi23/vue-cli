<template>
  <h3> Good Morning </h3>
  <Gretting :age="age"> </Gretting>
  <user :age="age" @age-change="age++"> </user>
</template>

<script>
  import Gretting from "./components/Gretting.vue";
  import User from "./components/Other.vue";

export default {

  name: 'App' , 
  components: {
    Gretting , 
    User
  } , 
  data(){
    return {
      age:20
    }

  }
}
</script>
 