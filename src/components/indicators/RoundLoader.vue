<template>
    <div class="round-loader"
        :class="{'green': buffer >= 15, 'red': buffer < 15}"
        >
        <span class="loader-value">{{ buffer }}</span>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RoundLoader',
    data() {
        return {
            value: 76,
            buffer: 0,
        }
    },
    methods: {
        updateLoader() {
            const loader = document.querySelector('.round-loader');

            var loading = setInterval(() => {
                if (this.buffer < 20) {
                    loader.style.background = `conic-gradient(
                        #fe9898 0% ${this.buffer}%, 
                        #333333 ${this.buffer}% 100%
                    )`;
                }
                else if(this.buffer >= 20) {
                    loader.style.background = `conic-gradient(
                        #83fd83 0% ${this.buffer}%, 
                        #333333 ${this.buffer}% 100%
                    )`;
                }

                if(this.buffer < this.value) {
                    ++this.buffer;
                }
                else {
                    clearInterval(loading);
                }

            }, 20);
        }
    },
    mounted() {
        this.updateLoader();
    }
});
</script>

<style scoped>
.round-loader {
    width: calc(var(--island-height) / 1.4);
    height: calc(var(--island-height) / 1.4);
    position: relative;
    border-radius: 50%;

    margin: 0 8px;
}

.green {
    color: #83fd83;
}

.red {
    /* background: conic-gradient(#fe9898 0% 15%, #AAAAAA 15% 100%); */
    color: #fe9898;
}

.loader-value {
    margin: 8%;

    font-size: 0.8rem;
    font-weight: light;

    background-color: var(--main-dark);

    width: 85%;
    height: 85%;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>