<template>
    <div class="dynamic-island">
        <span class="icon">👇</span>
        <RoundLoader />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import RoundLoader from '@/components/indicators/RoundLoader.vue';

export default defineComponent({
    name: 'DynamicIsland',
    components: {
        RoundLoader
    }
});
</script>

<style scoped>
.dynamic-island {
    background-color: var(--main-dark);
    width: var(--island-width);
    height: var(--island-height);
    border-radius: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: calc(50vh - var(--island-height) / 2);
    left: calc(50vw - var(--island-width) / 2);

    z-index: 1;

    cursor: pointer;

    transition: 
        all var(--transition-standard) ease-in-out;
}

.dynamic-island:hover {
    height: calc(var(--island-height) * 1.2);
    top: calc(50vh - (var(--island-height) * 1.2) / 2);
}

.icon {
    margin: 0 8px;
}
</style>