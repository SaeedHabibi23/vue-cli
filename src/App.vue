<template>
    <div class="container">
      <div class="row">
        <div class="col-md-">
          <div class="mt-3">
            <button  @click="actionbutton" class="btn btn-primary"> Increment </button>
            <button @click="decrement()" class="btn btn-danger"> Decrement </button>
            <div>
              <h2> {{ count }} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      count: 0
    }
  },
  methods:{
    actionbutton(){
      this.count++;
    }
    , decrement(){
      this.count--;
    }
  }
 
}

</script>

