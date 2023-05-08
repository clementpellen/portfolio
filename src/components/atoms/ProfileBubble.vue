<template>
    <div class="profile-bubble profile-bubble-position radius" :class="{ 'leave-island': islandClick }" />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProfileBubble',
    props: {
        islandClick: {
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
}

.profile-bubble-position {
    position: absolute;
    top: calc(50vh - var(--island-height) / 2);
    left: calc(50vw + var(--island-width) / 2 - var(--island-height));
    z-index: 1;
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
</style>