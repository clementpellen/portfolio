<template>
  <svg class="gooey-filter">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GooeyFilter',
});
</script>

<style scoped lang="scss">
.gooey-filter {
  display: none;
}
</style>