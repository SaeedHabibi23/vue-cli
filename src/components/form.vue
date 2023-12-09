<template>
    <form action="">
        <div class="help">
            <slot name="help"> </slot>
</div> 
<div class="fields">
    <slot name="fields"> </slot>
</div>
  <div class="button">
    <slot name="button"> </slot>
</div>
    </form>
   <slot>  No Form To render </slot>
</template>
<slot> </slot>

<script>
export default {
   name: 'FormVue' 
}
</script>
