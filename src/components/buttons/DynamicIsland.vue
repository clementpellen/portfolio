<template>
    <div class="dynamic-island" 
    :class="{'click': click, 'impact': impact}"
    @click="onClick()"
    >
        <span class="icon" :class="{'move': indication}">👇</span>
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
    data() {
        return {
            click: false,
            indication: true,
        }
    },
    props: {
        impact: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClick() {
            this.click = true;
            setTimeout(() => {
                this.click = false;
            }, 400 * 2);
            this.indication = false;
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

    z-index: 2;

    cursor: pointer;

    transition: 
        all var(--transition-standard) ease-in-out;
}

.dynamic-island:hover {
    height: calc(var(--island-height) * 1.2);
    top: calc(50vh - (var(--island-height) * 1.2) / 2);
}

.dynamic-island.click {
    height: var(--island-height);
    top: calc(50vh - var(--island-height) / 2);
}

.dynamic-island.impact {
    animation: impact calc(var(--animation-standard) * 2);
}

@keyframes impact {
    0% {
        height: var(--island-height);
        top: calc(50vh - var(--island-height) / 2);
    }
    20% {
        height: calc(var(--island-height) * 1.2);
        top: calc(50vh - (var(--island-height) * 2) / 2);
    }
    60% {
        width: calc(var(--island-width) * 1.2);
        left: calc(50vw - (var(--island-width) * 1.2) / 2);
        height: calc(var(--island-height) * 0.95);
        top: calc(50vh - var(--island-height) / 2);
    }
    100% {
        height: var(--island-height);
    }
}

.icon {
    margin: 0 8px;
}

.icon.move {
    animation: move 30s 2s infinite;
}

@keyframes move {
    0% {
        transform: translateY(0);
    }
    1% {
        transform: translateY(-5px);
    }
    3% {
        transform: translateY(5px);
    }
    4% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}
</style>