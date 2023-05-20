<template>
  <HomePage />
</template>

<script>
import { defineComponent } from 'vue';
import HomePage from '@/views/HomePage.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomePage
  }
});
</script>
