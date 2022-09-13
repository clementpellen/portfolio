<template>
    <div class="portfolio-content" 
    :class="{'clicked': clicked, 'close': close}" 
    @click="closePortfolio()"
    />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PortfolioContent',
    data() {
        return {
            clicked: false,
            close: false
        }
    },
    methods: {
        closePortfolio() {
            this.clicked = true;
            setTimeout(() => {
                this.close = true;
            }, 400);
            setTimeout(() => {
                this.$emit('portfolio-clicked');
            }, 400 * 2);
        }
    },
});
</script>

<style scoped>
.portfolio-content {
    background-color: var(--main-dark);
    width: 90vw;
    height: 90vh;
    border-radius: 30px;

    position: absolute;
    top: calc(50vh - var(--portfolio-height) / 2);
    left: calc(50vw - var(--portfolio-width) / 2);

    z-index: 2;

    cursor: pointer;

    transition: 
        all calc(var(--transition-standard) / 1) ease-in-out;
}

.clicked {
    width: var(--island-width);
    height: calc(var(--portfolio-height) - 50vh - var(--island-height) - 10px);
    top: calc(50vh + var(--island-height) + 10px);
    left: calc(50vw - var(--island-width) / 2);
}

.close {
    top: calc(50vh - var(--island-height) / 2);
    left: calc(50vw - var(--island-width) / 2);
    width: var(--island-width);
    height: var(--island-height);

    z-index: 0;
}
</style>