<template>
    <div class="home-page">
        <GooeyFilter />
        <div :class="{ 'sticky-filter': !displayPortfolio && !dynamicIslandImpact }">
            <DynamicIsland :impact="dynamicIslandImpact" @click="displayPortfolio = true" />
            <ProfileBubble />
        </div>
        <PortfolioWindow v-if="displayPortfolio" @portfolio-clicked="launchDynamicIslandImpact()"
            @close-portfolio="displayPortfolio = false" />
        <img src="@/assets/img/apple-screen.jpg" class="background" :class="{ 'blur': displayPortfolio }" />
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