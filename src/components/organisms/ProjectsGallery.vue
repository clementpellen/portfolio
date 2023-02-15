<template>
    <div class="projects-gallery">
        <ProjectPreview  v-for="item in 5" :key="item"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProjectPreview from '../molecules/ProjectPreview.vue';

export default defineComponent({
    name: 'ProjectsGallery',
    components: {
        ProjectPreview
    }
});
</script>

<style scoped lang="scss">
.projects-gallery {
    overflow: scroll;

    *:not(:last-child) {
        margin-bottom: 10px;
    }
}

.projects-gallery::-webkit-scrollbar {
    display: none;
}
</style>