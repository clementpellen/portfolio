<template>
    <div class="portfolio-content" 
    :class="{'close': close, 'open': open}" 
    @click="portfolioClick = true"
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
            portfolioClick: false,
        }
    },
    methods: {
        closePortfolio() {
            this.close = true;
            this.$emit('portfolio-clicked');
            setTimeout(() => {
                this.$emit('close-portfolio');
            }, 400 * 2);
        },
        getBodyClick() {
            const body = document.querySelector('body');
            body.addEventListener('click', () => {
                if (!this.portfolioClick && !this.open) {
                    this.closePortfolio();
                }
                else {
                    this.portfolioClick = false;
                }
            });
        }
    },
    created() {
        setTimeout(() => {
            this.open = false;
        }, 800);
    },
    mounted() {
        this.getBodyClick();
    }
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