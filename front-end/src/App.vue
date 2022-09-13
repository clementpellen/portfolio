<template>
  <DynamicIsland 
  class="dynamic-island-container"
  :class="{'impact': dynamicIslandImpact, 'relax': dynamicIslandRelax}"
  @click="displayPortfolio = true" 
  />
  <PortfolioContent 
  v-if="displayPortfolio" 
  @portfolio-clicked="closePortfolio()" 
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
      displayPortfolio: false,
      dynamicIslandImpact: false,
      dynamicIslandRelax: false
    }
  },
  methods: {
    closePortfolio() {
      this.dynamicIslandImpact = true;
      this.displayPortfolio = false;
      setTimeout(() => {
        this.dynamicIslandImpact = false;
      }, 400);
      setTimeout(() => {
        this.dynamicIslandRelax = true;
      }, 500);
      setTimeout(() => {
        this.dynamicIslandRelax = false;
      }, 400 * 2);
    }
  },
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

.dynamic-island-container.impact {
    height: calc(var(--island-height) * 1.05);
    top: calc(50vh - (var(--island-height) * 1.25) / 2);
}

.dynamic-island-container.relax {
    width: calc(var(--island-width) * 1.03);
    left: calc(50vw - (var(--island-width) * 1.03) / 2);
    height: calc(var(--island-height) * 0.95);
}
</style>
