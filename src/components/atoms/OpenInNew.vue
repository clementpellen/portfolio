<template>
    <div class="open-in-new">
        <OpenInNewWhiteSvg />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import OpenInNewWhiteSvg from '@/assets/svg/OpenInNew__WhiteSvg.vue';

export default defineComponent({
    name: 'OpenInNew',
    components: {
        OpenInNewWhiteSvg
    }
});
</script>