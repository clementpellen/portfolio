<template>
    <div class="home-page">
        <DynamicIsland 
        :impact="dynamicIslandImpact" 
        @click="displayPortfolio = true" 
        />
        <PortfolioContent 
        v-if="displayPortfolio" 
        @portfolio-clicked="launchDynamicIslandImpact()"
        @close-portfolio="displayPortfolio = false" 
        />
        <img src="@/assets/img/apple-screen.jpg" class="background" :class="{'blur': displayPortfolio}" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import DynamicIsland from '@/components/buttons/DynamicIsland.vue';
import PortfolioContent from '@/components/structure/PortfolioContent.vue';

export default defineComponent({
    name: "HomePage",
    components: {
        DynamicIsland,
        PortfolioContent
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

<style scoped>
.home-page {
    width: 100%;
    height: 100%;
}

.background {
    height: 100%;
    width: 100%;
    display: block;
    background: rgb(251, 203, 113);
    transition: filter var(--animation-standard) ease-in-out;
    z-index: 0;
}

.blur {
    filter: blur(10px);
}
</style>