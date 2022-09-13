<template>
    <div class="portfolio-content" 
    :class="{'close': close, 'open': open}" 
    @click="closePortfolio()"
    />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PortfolioContent',
    data() {
        return {
            close: false,
            open: true,
        }
    },
    methods: {
        closePortfolio() {
            this.close = true;
            setTimeout(() => {
                this.$emit('portfolio-clicked');
            }, 400 * 2);
        }
    },
    created() {
        setTimeout(() => {
            this.open = false;
        }, 800);
    },
    
});
</script>

<style scoped>
.portfolio-content {
    background-color: var(--main-dark);
    width: var(--portfolio-width);
    height: var(--portfolio-height);
    border-radius: 30px;

    position: absolute;
    top: calc(50vh - var(--portfolio-height) / 2);
    left: calc(50vw - var(--portfolio-width) / 2);

    z-index: 2;

    cursor: pointer;
}

.close {
    animation: close var(--animation-standard) forwards;
}

.open {
    animation: close var(--animation-standard) reverse;
}

@keyframes close {
    0% {
        width: 90vw;
        height: 90vh;
        top: calc(50vh - var(--portfolio-height) / 2);
        left: calc(50vw - var(--portfolio-width) / 2);
        z-index: 2;
    }
    50% {
        width: var(--island-width);
        height: calc(var(--portfolio-height) - 50vh - var(--island-height) - 10px);
        top: calc(50vh + var(--island-height) + 10px);
        left: calc(50vw - var(--island-width) / 2);
        z-index: 1;
    }
    100% {
        width: var(--island-width);
        height: var(--island-height);
        top: calc(50vh - var(--island-height) / 2);
        left: calc(50vw - var(--island-width) / 2);
        z-index: 0;
    }
}
</style>