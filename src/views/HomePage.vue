<!-- TODO:
            - Cleaning css positions of gooey filter ✅
            - Cleaning css positions of DynamicIsland.vue ✅
            - Cleaning css positions of PortfolioWindow.vue ✅
            - Cleaning css animations ✅
            - Cleaning html + js in HomePage.vue
            - Check responsive portfoliowindow
-->

<template>
    <div class="home-page">
        <GooeyFilter />
        <main class="main-position" :class="{ 'gooey-filter': !openPortfolio && !dynamicIslandImpact }">
            <DynamicIsland :impact="dynamicIslandImpact" @click="openPortfolioWindow()" />
            <ProfileBubble :inIsland="bubbleInIsland" @click="openProfileWindow()" />
        </main>
        <PortfolioWindow v-if="openPortfolio" @portfolio-opened="portfolioOpened = true"
            @close-portfolio="launchDynamicIslandImpact()" @portfolio-closed="PortfolioClosed()" />
        <img src="@/assets/img/apple-screen.jpg" class="background" :class="{ 'blur': openPortfolio }" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import GooeyFilter from '@/components/molecules/GooeyFilter.vue';
import DynamicIsland from '@/components/molecules/DynamicIsland.vue';
import ProfileBubble from '@/components/atoms/ProfileBubble.vue';
import PortfolioWindow from '@/components/organisms/PortfolioWindow.vue';

export default defineComponent({
    name: "HomePage",
    components: {
        GooeyFilter,
        DynamicIsland,
        ProfileBubble,
        PortfolioWindow,
    },
    data() {
        return {
            openPortfolio: false,
            dynamicIslandImpact: false,
            portfolioOpened: false,
            bubbleInIsland: false,
        }
    },
    methods: {
        launchDynamicIslandImpact() {
            setTimeout(() => {
                this.dynamicIslandImpact = true;
                setTimeout(() => {
                    this.dynamicIslandImpact = false;
                    this.bubbleInIsland = false;
                }, 800 * 2);
            }, 700);
        },
        PortfolioClosed() {
            this.openPortfolio = false;
            this.portfolioOpened = false;
        },
        openPortfolioWindow() {
            this.openPortfolio = true;
            setTimeout(() => {
                this.bubbleInIsland = true;
            }, 800);
        },
        openProfileWindow() {
            this.bubbleInIsland = true;
            setTimeout(() => {
                this.openPortfolio = true;
            }, 800);
        },
    },
});
</script>

<style scoped lang="scss">
.home-page {
    width: 100%;
    height: 100%;

    main {
        --margin-height: 20px;
        --margin-width: 50px;

        --height: calc(var(--island-height) + var(--margin-height) * 2);
        --width: calc(var(--island-width) + var(--bubble-diameter) + var(--margin-width) * 2);

        height: var(--height);
        width: var(--width);
    }

    main.main-position {
        --top: calc(50vh - var(--height) / 2);
        --left: calc(50vw - var(--width) / 2);

        position: absolute;
        top: var(--top);
        left: var(--left);
    }

    main.gooey-filter {
        filter: url(#goo);
    }

    .background {
        height: 100%;
        width: 100%;
        display: block;
        background: rgb(251, 203, 113);
        transition: filter var(--animation-standard) ease-in-out;
        z-index: 0;
    }
}
</style>