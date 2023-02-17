
<template>
    <div class="project-preview radius"
    :class="{'visible':setPositionVisible(index, itemSpacing, scrollPosition)}"
    :style="scrollBackground && setBackgroundStyle(layerIndex, itemSpacing, scrollPosition)"
    >
        <div class="foreground">
            <img class="radius" src="@/assets/img/ville.jpg" />
            <div class="title-container">
                <h1 class="title">Projet d'exemple</h1>
                <h4 class="dates">Mai 2020 - Novembre 2021</h4>
            </div>
            <div class="icons-container">
                <OpenInNew />
                <Done__WhiteSvg />
            </div>
        </div>
        <img src="@/assets/img/ville.jpg" class="background big-blur" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import OpenInNew from '../atoms/OpenInNew.vue';

import Done__WhiteSvg from '@/assets/svg/Done__WhiteSvg.vue';

export default defineComponent({
    name: 'ProjectPreview',
    components: {
        OpenInNew,
        Done__WhiteSvg
    },
    data() {
        return {
            itemSpacing: 170
        }
    },
    props: {
        index: {
            type: Number,
            required: true
        },
        scrollPosition: {
            type: Number,
            required: true
        },
        scrollBackground: {
            type: Boolean,
            required: false,
            default: false
        },
        scrollHeight: {
            type: Number,
            required: false,
            default: 0
        },
        galleryLength: {
            type: Number,
            required: false,
            default: 0
        },
        layerIndex: {
            type: Number,
            required: false,
            default: 0
        }
    },
    methods: {
        setPositionVisible(index, itemSpacing, scrollPosition) {
            // visible
            if (index < Math.floor(scrollPosition / itemSpacing) + 3) {
                return true;
            }
            // last item
            else if(index === this.galleryLength - 1 && scrollPosition >= this.scrollHeight) {
                return true;
            }
            // invisible
            else {
                return false;
            }
        },
        setBackgroundStyle(layerIndex, itemSpacing, scrollPosition) {
            if(scrollPosition <= this.scrollHeight) {

                if(layerIndex === 1) {
                    const scale = 0.1 * (scrollPosition % itemSpacing / itemSpacing) + 0.9;
                    const top = 2.125 - (0.1 * (scrollPosition % itemSpacing / itemSpacing));
                    const brightness = 0.2 * (scrollPosition % itemSpacing / itemSpacing) + 0.8;
                    return {
                        position: 'absolute',
                        opacity: 1,
                        scale: scale,
                        top: `${top * itemSpacing}px`,
                        zIndex: 9,
                        filter: `brightness(${brightness})`
                    }
                }
                else if(layerIndex === 2) {
                    const scale = 0.1 * (scrollPosition % itemSpacing / itemSpacing) + 0.8;
                    const top = 2.25 - (0.1 * (scrollPosition % itemSpacing / itemSpacing));
                    const brightness = 0.4 * (scrollPosition % itemSpacing / itemSpacing) + 0.6;
                    return {
                        position: 'absolute',
                        opacity: 1,
                        scale: scale,
                        top: `${top * itemSpacing}px`,
                        zIndex: 8,
                        filter: `brightness(${brightness})`
                    }
                }
            }
        }
    }
});
</script>

<style scoped lang="scss">
.project-preview {
    width: 100%;
    height: 160px;

    background-color: var(--main-dark);
    color: var(--main-light);
    border: 2px solid var(--border);

    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    opacity: 0;

    z-index: 10;

    &.visible {
        opacity: 1;
    }

    .foreground {
        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 1;

        box-sizing: border-box;
        padding: 20px;

        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 2fr;
        grid-template-areas:
            "img title"
            "img icons";
        gap: 20px;

        img {
            grid-area: img;
            height: 100%;
            width: 100%;
            border-radius: 20px;
        }

        .title-container {
            grid-area: title;
            margin-top: 10px;

            * {
                width: 100%;
                height: auto;
            }
        }

        .icons-container {
            grid-area: icons;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            gap: 5px;
            margin-bottom: 10px;
        }
    }

    .background {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
    }
}
</style>