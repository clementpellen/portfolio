<template>
    <div class="navigation-toolbar flex-center">
        <SkipPrevious />
        <OpenInNew />
        <SkipNext />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import SkipPrevious from '@/components/atoms/SkipPrevious.vue';
import OpenInNew from '@/components/atoms/OpenInNew.vue';
import SkipNext from '@/components/atoms/SkipNext.vue';

export default defineComponent({
    name: 'NavigationToolbar',
    components: {
        SkipPrevious,
        OpenInNew,
        SkipNext,
    }
});
</script>

<style scoped lang="scss">
.navigation-toolbar {
    gap: 20px;
    scale: 1.5;
}
</style>