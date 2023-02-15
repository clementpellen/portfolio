<template>
    <div class="expanded-project radius">
        <div class="foreground flex-column">
            <img src="@/assets/img/ville.jpg" />
            <div class="title-container">
                <h1 class="title">Projet d'exemple</h1>
                <h4 class="dates">Mai 2020 - Novembre 2021</h4>
            </div>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet
                erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus
                volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu
                enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam
                sodales hendrerit.
            </p>
            <NavigationToolbar />
        </div>
        <img src="@/assets/img/ville.jpg" class="background big-blur" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import NavigationToolbar from '@/components/molecules/NavigationToolbar.vue';

export default defineComponent({
    name: 'ExpandedProject',
    components: {
        NavigationToolbar
    }
});
</script>

<style scoped lang="scss">
.expanded-project {
    max-width: 350px;
    min-width: 320px;

    color: var(--main-light);
    border: 2px solid var(--border);

    position: relative;
    overflow: hidden;

    * {
        height: 100%;
        width: 100%;
    }

    .foreground {
        position: absolute;
        z-index: 1;

        box-sizing: border-box;
        padding: 20px 20px 40px 20px;

        * {
            width: 100%;
            height: auto;
        }

        img {
            height: 50%;
            border-radius: 20px;
        }

        .description {
            max-height: 69px;
            overflow: hidden;
        }
    }

    .background {
        position: absolute;
        z-index: 0;
    }
}
</style>