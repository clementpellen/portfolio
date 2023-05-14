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
    width: var(--bubble-diameter);
    height: var(--bubble-diameter);

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
    top: var(--bubble-top-position);
    left: var(--bubble-left-position);

    z-index: 1;
}

.profile-bubble:hover {
    height: calc(var(--bubble-diameter) * 1.2);
    width: calc(var(--bubble-diameter) * 1.2);
    top: calc(var(--bubble-top-position) - var(--bubble-diameter) * 0.1);
    left: calc(var(--bubble-left-position) - var(--bubble-diameter) * 0.1);
}

.go-in-island {
    transform: translateX(-100px);
}
</style>