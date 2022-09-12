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
    },
    props: {
        impacted: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            getImpact: false
        }
    },
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

    cursor: pointer;

    transition: 
        all var(--transition-standard) ease-in-out;
}

.dynamic-island:hover {
    height: calc(var(--island-height) * 1.2);
    top: calc(50vh - (var(--island-height) * 1.2) / 2);
}

/* .dynamic-island.impacted {
    height: calc(var(--island-height) * 1.2);
    top: calc(50vh - (var(--island-height) * 1.2) / 2);
}

.dynamic-island.getImpact {
    height: var(--island-height);
    top: calc(50vh - var(--island-height) / 2);
} */

.icon {
    margin: 0 8px;
}
</style>