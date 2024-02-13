<template>
  <div class="container">
    <div class="d-flex flex-column">
      <div class="box" :style="{backgroundColor: BoxAselected ? 'red' : '#fff'}" @click="onBoxSelected('A')"></div>
      <div class="box" :style="{backgroundColor: BoxBselected ? 'blue' : '#fff'}" @click="onBoxSelected('B')"></div>
      <div class="box" :style="{backgroundColor: BoxCselected ? 'green' : '#fff'}" @click="onBoxSelected('C')"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BoxAselected: false,
      BoxBselected: false,
      BoxCselected: false,
    };
  },
  methods: {
    onBoxSelected(box) {
      if (box === 'A') {
        this.BoxAselected = true;
        this.BoxBselected = false;
        this.BoxCselected = false;
      } else if (box === 'B') {
        this.BoxAselected = false;
        this.BoxBselected = true;
        this.BoxCselected = false;
      } else {
        this.BoxAselected = false;
        this.BoxBselected = false;
        this.BoxCselected = true;
      }
    },
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 150px;
  border: 1px solid #000;
  margin: 3rem;
}
</style>
