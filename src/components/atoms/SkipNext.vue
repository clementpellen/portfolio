<template>
    <div class="skip-next">
        <SkipNextWhiteSvg />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import SkipNextWhiteSvg from '@/assets/svg/SkipNext__WhiteSvg.vue';

export default defineComponent({
    name: 'SkipNext',
    components: {
        SkipNextWhiteSvg
    }
});
</script>