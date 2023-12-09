<template>
<FormVue> 
  <form action="">
   <div class="help">
This is Some Help Text
</div> 
<div class="fields">
    <input type="text" name="" id="" placeholder="Name">
    <input type="email" name="" id="" placeholder="Email">
    <input type="password" name="" id="" placeholder="Password">
</div>
   <div class="button">
    <button type="submit"> Submit </button>
   </div>
    </form> 

</FormVue>
<FormVue> </FormVue>
</template>

<script>
import FormVue from "./components/form.vue"
 export default {
   name: 'App', 
   components: {
     FormVue 
    }
  };
   

   
</script>
 