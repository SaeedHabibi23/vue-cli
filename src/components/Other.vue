<template>
      <button @click="onclickage"> Update Age </button>

  <p> The User is {{ age }} years old </p>
  <p> {{ ageDoubled }} </p>
</template>

<script>
export default {
    name: "User-vue" , 
    props:["age"] , 
    emits:['age-change'] ,
    computed:{
        ageDoubled(){ 
            return this.age*2
        }
    },
    methods:{
        onclickage(){
            this.$emit('age-change' , 3)
        }
    }
}
</script>

