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
  height: 100vh;
}

.background-container {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(/src/assets/images/pattern-background-desktop-dark.svg);
  background-size: cover;
}

.container {
  max-width: 1160px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 70px;
}


.header {
  display: flex;
  align-items: center;
  height: 56px;
}
</style>
