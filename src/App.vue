<template>
    <h1> {{ title }} </h1>
    <a :href="link"> Go To Vue Js </a>
    <div>
      {{ getText() }}
    </div>

    {{ getNotherText() }}
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      title: 'This is the page Title',
      link: 'https://vuejs.org',
      text1: 'Hello Vue',
      text2: 'Hello React'
    }
  },
  methods: {
    getText() {
      return this.text1;
    },
    getNotherText() {
      return "React Course Learn";
    }
  }
}

</script>

