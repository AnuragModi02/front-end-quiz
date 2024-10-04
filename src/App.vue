<template>
  <div class="background-container">
    <div class="container">
      <ToggleComponent />
      <HelloWorld />
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToggleComponent from './components/ToggleComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToggleComponent
  }
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
  font-family: MyWebFont;
  font-weight: lighter;
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
  gap: 30px;
}
</style>
