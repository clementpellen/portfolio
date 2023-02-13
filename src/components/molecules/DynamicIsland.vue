<template>
    <div class="dynamic-island dynamic-island-position dynamic-island-container radius" 
    :class="{'click': click, 'impact': impact}"
    @click="onClick()"
    >
        <span class="icon" :class="{'move': indication}">👇</span>
        <ProgressCircle />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProgressCircle from './ProgressCircle.vue';

export default defineComponent({
    name: 'DynamicIsland',
    components: {
        ProgressCircle
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

<style scoped lang="scss">
.dynamic-island {
    background-color: var(--main-dark);
    width: var(--island-width);
    height: var(--island-height);
    
    cursor: pointer;
    
    transition: 
    all var(--transition-standard) ease-in-out;

    .icon.move {
        animation: move 30s 2s infinite;
    }
}

.dynamic-island-position {
    position: absolute;
    top: calc(50vh - var(--island-height) / 2);
    left: calc(50vw - var(--island-width) / 2);
    z-index: 2;
}

.dynamic-island-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
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