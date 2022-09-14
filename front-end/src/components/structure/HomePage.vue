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
        <div class="background" :class="{'blur': displayPortfolio}" />
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
    width: 100%;
    height: 100%;
    /* background: linear-gradient(90deg, rgba(251, 203, 113, 1) 50%, rgba(255, 0, 0, 1) 50%); */
    background: rgb(251,203,113);
    z-index: -1;

    /* transition: filter calc(var(--animation-standard) * 2) ease-in-out; */
}

.blur {
    /* filter: blur(10px);  */
}
</style>