<template>
  <img alt="Vue logo" src="./assets/logo.png" @click='clickImage()'>
  <HelloWorld :msg='message'/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'AppTwo',
  components: {
    HelloWorld
  },
  data(){
    return {
      message: "Hello Vue!",
    }
  },
    methods: {
      clickImage(){
       console.log("Image clicked! ");
     }
    },

  }

</script>

<style lang="scss">
  $color: #2c3e50;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
  background-color: $color;
}
</style>

