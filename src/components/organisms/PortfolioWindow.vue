<template>
    <div class="portfolio-window portfolio-window-position flex-column radius" :class="{ 'close': close, 'open': open }"
        @click="portfolioClick = true">
        <ProgressHeader />
        <main class="main-container flex-row">
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
            this.$emit('close-portfolio');
            setTimeout(() => {
                this.$emit('portfolio-closed');
            }, this.$settings.animation_standard_speed);
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
            this.$emit('portfolio-opened');
        }, this.$settings.animation_standard_speed);
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
    height: var(--portfolio-height);
    overflow: hidden;
    width: var(--portfolio-width);
    max-width: 900px;
    padding: 15px 30px 30px 30px;
    gap: 20px;

    main {
        width: 100%;
        flex: 1;
        gap: 20px;

        * {
            flex: 1;
            height: 543px;
        }
    }

}

.portfolio-window-position {
    position: absolute;
    top: var(--portfolio-top-position);
    left: var(--portfolio-left-position);
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
        height: var(--portfolio-height);
        width: var(--portfolio-width);
        top: var(--portfolio-top-position);
        left: var(--portfolio-left-position);
        z-index: 3;
    }

    50% {
        height: 35vh;
        width: calc(var(--island-width) * 1.05);
        top: calc(50vh + 50px);
        left: var(--island-left-position);
        z-index: 2;
    }

    100% {
        width: calc(var(--island-width) * 1.05);
        height: var(--island-height);
        top: var(--island-top-position);
        left: var(--island-left-position);
        z-index: 1;
    }
}

@media (max-width: 1000px) {
    .portfolio-window-position {
        --portfolio-width: 90vw;
    }
}
</style>