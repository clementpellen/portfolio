<template>
    <div class="round-loader"
        :class="{'green': value >= 15, 'red': value < 15}"
        >
        <span class="loader-value">{{ value }}</span>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RoundLoader',
    data() {
        return {
            value: 78
        }
    }
});
</script>

<style scoped>
.round-loader {
    width: calc(var(--island-height) / 1.6);
    height: calc(var(--island-height) / 1.6);
    border-radius: 50%;

    margin: 0 8px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.green {
    border: solid 2px #83fd83;
    color: #83fd83;
}

.red {
    border: solid 2px #fe9898;
    color: #fe9898;
}

.loader-value {
    font-size: 0.8rem;
    font-weight: light;
}
</style>