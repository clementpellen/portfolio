<template>
    <div class="gallery-background-container">
        <div class="projects-gallery" @scroll="handleScroll">
            <ProjectPreview v-for="(item, index) in galleryLength" :key="item"
            :index="index"
            :scrollPosition="scrollPosition"
            :scrollHeight="scrollHeight"
            :galleryLength="galleryLength"
            :layerIndex="0"
            />
        </div>
        <ProjectPreview
        :index="Math.floor(scrollPosition / itemSpacing) + 3"
        :scrollPosition="scrollPosition"
        :scrollBackground="true"
        :scrollHeight="scrollHeight"
        :galleryLength="galleryLength"
        :layerIndex="1"
        />
        <ProjectPreview
        v-if="Math.floor(scrollPosition / itemSpacing) + 4 < galleryLength"
        :index="Math.floor(scrollPosition / itemSpacing) + 4"
        :scrollPosition="scrollPosition"
        :scrollBackground="true"
        :scrollHeight="scrollHeight"
        :galleryLength="galleryLength"
        :layerIndex="2"
        />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProjectPreview from '../molecules/ProjectPreview.vue';

export default defineComponent({
    name: 'ProjectsGallery',
    components: {
        ProjectPreview
    },
    data() {
        return {
            galleryLength: 10,
            itemSpacing: 170,
            scrollPosition: 0,
            scrollHeight: 0
        }
    },
    methods: {
        handleScroll(event) {
            this.scrollPosition = parseInt(event.target.scrollTop);
            this.scrollHeight = parseInt(event.target.scrollHeight - event.target.offsetHeight - 1);
        }
    },
});
</script>

<style scoped lang="scss">
.gallery-background-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.projects-gallery {
    width: 100%;
    height: 100%;
    overflow: scroll;

    *:not(:last-child) {
        margin-bottom: 10px;
    }
}

.projects-gallery::-webkit-scrollbar {
    display: none;
}
</style>