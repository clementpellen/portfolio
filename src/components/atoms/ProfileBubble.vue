<template>
    <div class="profile-bubble profile-bubble-position flex-center radius" @click="bubbleClick = true"
        :class="{ 'go-in-island': goInIsland || bubbleClick, 'leave-island': !goInIsland && !bubbleClick }">
        <Profile__SvgVue />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Profile__SvgVue from '@/assets/svg/Profile__Svg.vue';

export default defineComponent({
    name: 'ProfileBubble',
    components: {
        Profile__SvgVue
    },
    data() {
        return {
            bubbleClick: false
        }
    },
    props: {
        goInIsland: {
            type: Boolean,
            default: false
        }
    },
});
</script>

<style scoped lang="scss">
.profile-bubble {
    background-color: var(--main-dark);
    width: var(--island-height);
    height: var(--island-height);

    transition:
        width var(--transition-standard) ease-in-out,
        height var(--transition-standard) ease-in-out,
        top var(--transition-standard) ease-in-out,
        left var(--transition-standard) ease-in-out,
        transform 1s ease-in-out;

    cursor: pointer;
}

.profile-bubble-position {
    position: absolute;
    top: calc(50vh - var(--island-height) / 2);
    left: calc(50vw + var(--island-width) / 2 + 30px);

    z-index: 1;
}

.profile-bubble:hover {
    height: calc(var(--island-height) * 1.2);
    width: calc(var(--island-height) * 1.2);
    top: calc(50vh - (var(--island-height) * 1.2) / 2);
    left: calc(50vw + var(--island-width) / 2 + 30px - (var(--island-height) * 1.2 - var(--island-height)) / 2);
}

.go-in-island {
    transform: translateX(-100px);
}
</style>