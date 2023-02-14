<template>
    <div class="portfolio-window portfolio-window-position flex-column radius" 
    :class="{'close': close, 'open': open}" 
    @click="portfolioClick = true"
    >
        <ProgressHeader />
        <main>
            <ProjectsGallery />
            <ExpandedProject />
        </main>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import ProgressHeader from '@/components/molecules/ProgressHeader.vue';
import ProjectsGallery from '@/components/organisms/ProjectsGallery.vue'
import ExpandedProject from '@/components/molecules/ExpandedProject.vue'

export default defineComponent({
    name: 'PortfolioWindow',
    components: {
        ProgressHeader,
        ProjectsGallery,
        ExpandedProject
    },
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

<style scoped lang="scss">
.portfolio-window {
    background-color: var(--main-dark);
    box-sizing: border-box;
    width: var(--portfolio-width);
    max-width: 1000px;
    height: var(--portfolio-height);
    overflow: hidden;
    padding: 15px 30px 30px 30px;
    
    main {
        margin-top: 20px;
        width: 100%;
        flex: 1;
        background-color: red;
    }
}

.portfolio-window-position {
    position: absolute;
    top: calc(50vh - var(--portfolio-height) / 2);
    z-index: 3;
}

.portfolio-window.close {
    animation: close var(--animation-standard) forwards;
}

.portfolio-window.open {
    animation: close var(--animation-standard) reverse;
}

@keyframes close {
    0% {
        width: 90vw;
        height: 90vh;
        top: calc(50vh - var(--portfolio-height) / 2);
        left: calc(50vw - var(--portfolio-width) / 2);
        z-index: 3;
    }
    50% {
        width: calc(var(--island-width) * 1.05);
        height: calc(var(--portfolio-height) - 50vh - var(--island-height) - 10px);
        top: calc(50vh + var(--island-height) + 10px);
        left: calc(50vw - var(--island-width) / 2);
        z-index: 2;
    }
    100% {
        width: calc(var(--island-width) * 1.05);
        height: var(--island-height);
        top: calc(50vh - var(--island-height) / 2);
        left: calc(50vw - var(--island-width) / 2);
        z-index: 1;
    }
}

@media (max-width: 1200px) {
    .portfolio-window-position {
        left: calc(50vw - var(--portfolio-width) / 2);
    }
}

@media (min-width: 1200px) {
    .portfolio-window-position {
        left: calc(50vw - 1000px / 2);
    }

    @keyframes close {
        0% {
            width: 1000px;
            height: 90vh;
            top: calc(50vh - var(--portfolio-height) / 2);
            left: calc(50vw - 1000px / 2);
            z-index: 3;
        }

        50% {
            width: calc(var(--island-width) * 1.05);
            height: calc(var(--portfolio-height) - 50vh - var(--island-height) - 10px);
            top: calc(50vh + var(--island-height) + 10px);
            left: calc(50vw - var(--island-width) / 2);
            z-index: 2;
        }

        100% {
            width: calc(var(--island-width) * 1.05);
            height: var(--island-height);
            top: calc(50vh - var(--island-height) / 2);
            left: calc(50vw - var(--island-width) / 2);
            z-index: 1;
        }
    }
}
</style>