<template>
    <div class="home-page">
        <!-- <DynamicIsland :impact="dynamicIslandImpact" @click="displayPortfolio = true" /> -->
        <!-- <div class="sticky-filter" v-if="islandClick">
            <div class="color-dodge" />
            <div class="color-burn" />
        </div> -->
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                        result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
        <div class="sticky-filter">
            <DynamicIsland :impact="dynamicIslandImpact" @click="islandClick = true" />
            <ProfileBubble :islandClick="islandClick" />
        </div>
        <!-- <PortfolioWindow v-if="displayPortfolio" @portfolio-clicked="launchDynamicIslandImpact()"
            @close-portfolio="displayPortfolio = false" /> -->
        <img src="@/assets/img/apple-screen.jpg" class="background" :class="{ 'blur': displayPortfolio }" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import DynamicIsland from '@/components/molecules/DynamicIsland.vue';
// import PortfolioWindow from '@/components/organisms/PortfolioWindow.vue';
import ProfileBubble from '@/components/atoms/ProfileBubble.vue';

export default defineComponent({
    name: "HomePage",
    components: {
        DynamicIsland,
        // PortfolioWindow,
        ProfileBubble,
    },
    data() {
        return {
            islandClick: false,
            displayPortfolio: false,
            dynamicIslandImpact: false,
        }
    },
    methods: {
        launchDynamicIslandImpact() {
            setTimeout(() => {
                this.dynamicIslandImpact = true;
                setTimeout(() => {
                    this.dynamicIslandImpact = false;
                }, 800 * 2);
            }, 700);
        },
    },
});
</script>

<style scoped lang="scss">
.home-page {
    width: 100%;
    height: 100%;

    .sticky-filter {
        // position: relative;
        top: calc(50vh - var(--island-height) / 2 - 10px);
        left: calc(50vw - var(--island-width) / 2 - 10px);
        width: calc(var(--island-width) + var(--island-height) + 60px);
        height: calc(var(--island-height) + 20px);
        filter: url(#goo);
    }

    // .sticky-filter {
    //     position: relative;
    //     top: calc(50vh - var(--island-height) / 2 - 10px);
    //     left: calc(50vw - var(--island-width) / 2 - 10px);
    //     width: calc(var(--island-width) + var(--island-height) + 60px);
    //     height: calc(var(--island-height) + 20px);
    //     backdrop-filter: blur(2px) contrast(0.5);
    //     z-index: 3;

    //     // .color-dodge {
    //     //     position: absolute;
    //     //     width: 100%;
    //     //     height: 100%;
    //     //     background-color: #80808000;
    //     //     mix-blend-mode: color-dodge;
    //     // }

    //     // .color-burn {
    //     //     position: absolute;
    //     //     top: 0;
    //     //     left: 0;
    //     //     width: 100%;
    //     //     height: 100%;
    //     //     background-color: #808080;
    //     //     mix-blend-mode: color-burn;
    //     // }
    // }

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