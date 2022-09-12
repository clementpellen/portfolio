<template>
  <DynamicIsland 
  :impacted="!displayPortfolio"
  @click="displayPortfolio = true" 
  />
  <PortfolioContent 
  v-if="displayPortfolio" 
  @portfolio-clicked="displayPortfolio = false" 
  />
</template>

<script>
import { defineComponent } from 'vue';
import DynamicIsland from '@/components/buttons/DynamicIsland.vue';
import PortfolioContent from '@/components/structure/PortfolioContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    DynamicIsland,
    PortfolioContent
  },
  data() {
    return {
      displayPortfolio: false
    }
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
}

body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  font-size: 1em;

  background-color: rgb(251, 203, 113);
}

h1, h2, h3, h4, h5, h6, span {
  margin: 0;
  padding: 0;
  font-family: Arial;
}
</style>
