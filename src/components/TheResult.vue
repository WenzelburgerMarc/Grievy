<template>
    <div class="center-content">
        <h6 class="header">Your Ranking</h6>
        <div class="ranking-container">
            <div class="ranking-item" v-for="(item, index) in foodList" :key="item.name">
                {{ index + 1 }}. {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IonRange, IonLabel } from '@ionic/vue';
import Store from '@/store';

export default {
    name: 'TheResult',
    components: {
        IonRange,
        IonLabel
    },
    data() {
        return {
            foodList: Store.state.foodList,
        };
    },
    methods: {
        updateFoodList() {
            Store.mutations.sortFoodListByRating(Store.state);
            this.foodList = Store.state.foodList;
        },
    },
};
</script>

<style scoped>
.center-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    padding: 0 2.5rem;
}

.header {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem;
}

.ranking-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background: rgba(201, 226, 223, 0.6);
    border-radius: 2rem;
    padding: 2rem 2rem;
}

.ranking-item {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
}
</style>
