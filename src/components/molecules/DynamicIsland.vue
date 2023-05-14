<template>
    <div class="dynamic-island dynamic-island-position dynamic-island-container radius"
        :class="{ 'click': click, 'impact': impact }" @click="onClick()">
        <span class="icon" :class="{ 'move': indication }">👇</span>
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
    top: var(--island-top-position);
    left: var(--island-left-position);

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
    transform: translateY(calc(var(--island-height) * (-0.1)));
}

.dynamic-island.click {
    height: var(--island-height);
    top: var(--island-top-position);
}

.dynamic-island.impact {
    animation: impact calc(var(--animation-standard) * 2);
}

@keyframes impact {
    0% {
        height: var(--island-height);
        top: var(--island-top-position);
    }

    20% {
        height: calc(var(--island-height) * 1.2);
        transform: translateY(-25px);
    }

    60% {
        height: calc(var(--island-height) * 0.95);
        transform: translateY(calc(var(--island-height) * (0.05)));
        width: calc(var(--island-width) * 1.2);
        left: calc(var(--island-left-position) * (-0.1));
    }

    100% {
        height: var(--island-height);
    }
}

@keyframes move {
    0% {
        transform: translateY(0px);
    }

    1% {
        transform: translateY(-5px);
    }

    3% {
        transform: translateY(5px);
    }

    4% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>