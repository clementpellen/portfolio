<template>
    <div class="profile-bubble profile-bubble-position flex-center radius" :class="{ 'go-in-island': bubbleClick }"
        @click="bubbleClick = true">
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
});
</script>

<style scoped lang="scss">
.profile-bubble {
    background-color: var(--main-dark);
    width: var(--island-height);
    height: var(--island-height);

    transition:
        all var(--transition-standard) ease-in-out;

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
    animation: go-in-island 1s forwards;
}

.leave-island {
    animation: leave-island 1s forwards;
}

@keyframes leave-island {
    0% {
        left: calc(50vw + var(--island-width) / 2 - var(--island-height));
    }

    100% {
        left: calc(50vw + var(--island-width) / 2 - var(--island-height) + 70px);
    }
}

@keyframes go-in-island {
    0% {
        left: calc(50vw + var(--island-width) / 2 + 30px);
    }

    100% {
        left: calc(50vw + var(--island-width) / 2 - var(--island-height));
    }
}
</style>