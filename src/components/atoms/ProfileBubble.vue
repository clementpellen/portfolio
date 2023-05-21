<template>
    <div class="profile-bubble profile-bubble-position flex-center radius"
        :class="{ 'go-in-island': inIsland, 'hidden': !visible }">
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
            visible: true
        }
    },
    props: {
        inIsland: {
            type: Boolean,
            default: false
        },
    },
    watch: {
        inIsland: {
            handler() {
                if (this.inIsland === true) {
                    setTimeout(() => {
                        this.visible = false;
                    }, this.$settings.animation_standard_speed / 2);
                }
                else {
                    this.visible = true;
                }
            }
        },
    }
});
</script>

<style scoped lang="scss">
.profile-bubble {
    background-color: var(--main-dark);
    width: var(--bubble-diameter);
    height: var(--bubble-diameter);

    transition:
        all calc(var(--animation-standard) / 2) ease-in-out,
        scale var(--animation-standard) ease-in-out,
        transform var(--animation-standard) ease-in-out;

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
    scale: 0.6;
    transform: translateX(-100px);
}

.hidden {
    visibility: hidden;
}
</style>