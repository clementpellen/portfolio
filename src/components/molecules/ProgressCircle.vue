<template>
    <div class="progress-circle progress-circle-container"
        :class="{'is-satisfying': buffer >= 15, 'is-bad': buffer < 15}"
        >
        <span class="progress-value progress-value-position flex-center">{{ buffer }}</span>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProgressCircle',
    data() {
        return {
            value: 76,
            buffer: 0,
        }
    },
    methods: {
        updateProgress() {
            const progress_circle = document.querySelector('.progress-circle');

            var progressing = setInterval(() => {
                if (this.buffer < 20) {
                    progress_circle.style.background = `conic-gradient(
                        #fe9898 0% ${this.buffer}%, 
                        #333333 ${this.buffer}% 100%
                    )`;
                }
                else if(this.buffer >= 20) {
                    progress_circle.style.background = `conic-gradient(
                        #83fd83 0% ${this.buffer}%, 
                        #333333 ${this.buffer}% 100%
                    )`;
                }

                if(this.buffer < this.value) {
                    ++this.buffer;
                }
                else {
                    clearInterval(progressing);
                }

            }, 20);
        }
    },
    mounted() {
        this.updateProgress();
    }
});
</script>

<style scoped>
.progress-circle {
    box-sizing: border-box;
    width: calc(var(--island-height) / 1.4);
    height: calc(var(--island-height) / 1.4);
    border-radius: 50%;
}

.progress-circle-container {
    position: relative;
}

.is-satisfying {
    color: #83fd83;
}

.is-bad {
    /* background: conic-gradient(#fe9898 0% 15%, #AAAAAA 15% 100%); */
    color: #fe9898;
}

.progress-value {
    font-size: 0.8rem;
    font-weight: light;

    background-color: var(--main-dark);

    width: 85%;
    height: 85%;
    border-radius: 100%;
}

.progress-value-position {
    margin: 8%;
}
</style>