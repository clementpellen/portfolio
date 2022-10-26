<template>
    <HomePage />
</template>

<script>
import { defineComponent } from 'vue';
import HomePage from '@/components/structure/HomePage.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomePage
  }
});
</script>

<style>
:root {
  --main-dark: #1a1a1a;

  --island-width: 240px;
  --island-height: 40px;

  --portfolio-width: 90vw;
  --portfolio-height: 90vh;

  --transition-standard: 0.4s;
  --animation-standard: 0.8s;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

#app {
  width: 100vw;
  height: 100vh;
  font-size: 1em;
}

h1, h2, h3, h4, h5, h6, span {
  margin: 0;
  padding: 0;
  font-family: Arial;
}
</style>
