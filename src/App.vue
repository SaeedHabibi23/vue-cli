<template>
<FormVue> 
   <template v-slot:help>
This is Some Help Text
</template> 
<template v-slot:fields>
    <input type="text" name="" id="" placeholder="Name">
    <input type="email" name="" id="" placeholder="Email">
    <input type="password" name="" id="" placeholder="Password">
</template>
   <template v-slot:button>
    <button type="submit"> Submit </button>
   </template>

   <p> DummyText </p>

</FormVue>
<FormVue>
   <template v-slot:help>
This is Some Contact Text
</template> 
<template v-slot:fields>
    <input type="text" name="" id="" placeholder="Name">
    <input type="email" name="" id="" placeholder="Email">
</template>
   <template v-slot:buttons>
    <button type="submit"> Submit </button>
   </template>
  </FormVue>
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
 