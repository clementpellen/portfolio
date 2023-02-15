<template>
    <div class="project-preview radius">
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
    }
});
</script>

<style scoped lang="scss">
.project-preview {
    width: 100%;
    height: 160px;

    color: var(--main-light);
    border: 2px solid var(--border);

    box-sizing: border-box;
    position: relative;
    overflow: hidden;

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