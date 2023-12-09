<template>
      <button @click="onclickage"> Update Age </button>

  <p> The User is {{ age }} years old </p>
</template>

<script>
export default {
    name: "User-vue" , 
    props:["age"] , 
    methods:{
        onclickage(){
            this.$emit('age-change')
        }
    }
}
</script>

