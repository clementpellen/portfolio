<template>
    <div class="skip-previous">
        <SkipPreviousWhiteSvg />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import SkipPreviousWhiteSvg from '@/assets/svg/SkipPrevious__WhiteSvg.vue';

export default defineComponent({
    name: 'SkipPrevious',
    components: {
        SkipPreviousWhiteSvg
    }
});
</script>