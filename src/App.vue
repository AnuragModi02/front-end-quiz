<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: 'MyWebFont';
  src: url('../src/assets/fonts/Rubik-VariableFont_wght.ttf');
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #313E51;
  height: 100%;
}
</style>
