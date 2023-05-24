<template>
    <div class="progress-bar-container">
        <ion-progress-bar :value="progress"></ion-progress-bar>
    </div>
</template>
<script lang="ts">
import { IonProgressBar } from '@ionic/vue';
import Store from '@/store';
export default {
    name: 'TheProgressBar',
    components: {
        IonProgressBar
    },
    data() {
        return {
            progress: 1 / (Store.state.foodList.length + 1),
            screenCounterValue: Store.state.foodList.length + 1,
        };
    },
    methods: {
        updateProgress() {
            this.progress += 1 / this.screenCounterValue;
        },
    },
    mounted() {
        this.screenCounterValue = Store.state.foodList.length + 1;
    }
}
</script>
<style scoped>
.progress-bar-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-bar-container ion-progress-bar {
    height: 7px;
    width: 100%;
    margin: 0 2.5rem;
    border-radius: 2rem;
    --background: #A2C5C4;
    --progress-background: #02423F;
}
</style>
