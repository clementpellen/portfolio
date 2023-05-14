<template>
    <div class="home-page">
        <GooeyFilter />
        <div :class="{ 'gooey-filter': !openPortfolio && !dynamicIslandImpact }">
            <DynamicIsland :impact="dynamicIslandImpact" @click="openPortfolio = true" />
            <ProfileBubble :goInIsland="portfolioOpened || dynamicIslandImpact" />
        </div>
        <PortfolioWindow v-if="openPortfolio" @portfolio-opened="portfolioOpened = true"
            @close-portfolio="launchDynamicIslandImpact()" @portfolio-closed="PortfolioClosed()" />
        <img src="@/assets/img/apple-screen.jpg" class="background" :class="{ 'blur': openPortfolio }" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import GooeyFilter from '@/components/molecules/GooeyFilter.vue';
import DynamicIsland from '@/components/molecules/DynamicIsland.vue';
import PortfolioWindow from '@/components/organisms/PortfolioWindow.vue';
import ProfileBubble from '@/components/atoms/ProfileBubble.vue';

export default defineComponent({
    name: "HomePage",
    components: {
        GooeyFilter,
        DynamicIsland,
        PortfolioWindow,
        ProfileBubble,
    },
    data() {
        return {
            openPortfolio: false,
            dynamicIslandImpact: false,
            portfolioOpened: false,
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
        PortfolioClosed() {
            this.openPortfolio = false;
            this.portfolioOpened = false;
        }
    },
});
</script>

<style scoped lang="scss">
.home-page {
    width: 100%;
    height: 100%;

    .gooey-filter {
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