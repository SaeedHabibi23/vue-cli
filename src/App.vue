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
        <div class="mt-3">
          <div class="form-group">
             <label for=""> First Number </label>
            <input type="number" v-model="firstNumber" class="form-control">

            <label for=""> Second Number </label>
            <input type="number" v-model="secondNumber" class="form-control">

          

          </div>
        <p>Result: {{ sum }}</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      count: 0,
       firstNumber: 0,
    secondNumber: 0
    }
  },
  methods:{
    actionbutton(){
      this.count++;
    }
    , decrement(){
      this.count--;
    },
 
  },
   computed: {
    sum: function() {
      return parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
  }
 
}

</script>

