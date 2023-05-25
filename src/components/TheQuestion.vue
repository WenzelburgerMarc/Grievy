<template>
    <div class="center-content">
        <p>How much do you like {{ foodList[index].name }}?</p>
        <ion-range :value="sliderValue" @ion-change="saveSliderValue" aria-valuenow="50" class="range-slider"></ion-range>
        <div class="label-container">
            <ion-label slot="start">meh</ion-label>
            <ion-label slot="end">love it!</ion-label>
        </div>
    </div>
</template>
<script lang="ts">
import { IonRange, IonLabel } from '@ionic/vue';
import Store from '@/store';
export default {
    name: 'TheQuestion',
    components: {
        IonRange,
        IonLabel
    },
    data() {
        return {
            sliderValue: 50,
            foodList: Store.state.foodList,
        };
    },
    methods: {
        saveSliderValue(event: CustomEvent<any>) {
            this.sliderValue = event.detail.value;
            this.foodList[this.index].rating = this.sliderValue;
            this.goToNextSlide();
        },
        goToNextSlide() {
            if (this.index < this.foodList.length - 1) {
                this.$emit('goToNextQuestion');
            } else {
                this.$emit('showResults');
            }
        },
    },
    props: {
        index: {
            type: Number,
            default: 0,
        }
    },
    mounted() {
        this.foodList = Store.state.foodList;
    }
}
</script>

<style scoped>
.center-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: visible;
    padding: 0 2.5rem;
}

.range-slider {
    overflow: visible;
    width: 100%;
    max-height: 50px;
    min-height: 10px;
    --knob-box-shadow: 0px 0px 0px 0.5px #000;
    --knob-size: 25px;
    --bar-background-active: #DDA932;
    --bar-background: #D7D7D7;
    pointer-events: auto;
}

.center-content p {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem;
    margin: 0;
}

ion-label {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 19px;
}

.label-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>