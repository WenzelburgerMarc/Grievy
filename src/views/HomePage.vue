<template>
  <ion-page>
    <ion-header>
      <the-progress-bar ref="progressBar" />
    </ion-header>
    <ion-content>
      <swiper ref="swiper" @init="initSwiper" :lazy="true" :slidesPerView="1" class="swiper-no-swiping">

        <swiper-slide v-for="indexFood in foodList.length" :key="indexFood - 1">
          <the-question :index="indexFood - 1" @increaseIndex="increaseIndex" @showResults="goToResults" />
        </swiper-slide>
        <swiper-slide>
          <the-result ref="theResult" />
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import '@ionic/vue/css/ionic-swiper.css';

import TheProgressBar from '@/components/TheProgressBar.vue';
import TheQuestion from '@/components/TheQuestion.vue';
import TheResult from '@/components/TheResult.vue';
import Store from '@/store';

export default {
  name: 'HomePage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    Swiper,
    SwiperSlide,
    TheProgressBar,
    TheQuestion,
    TheResult
  },
  data() {
    return {
      questionIndex: 0,
      foodList: Store.state.foodList,
      swiperInstance: null as typeof Swiper | null,
    };
  },
  methods: {
    initSwiper(swiper: any) {
      this.swiperInstance = swiper;
    },
    increaseIndex() {
      this.questionIndex++;
      this.increaseProgressBar();
    },
    goToResults() {
      this.callUpdateFoodList();
      this.increaseProgressBar();
    },
    callUpdateFoodList() {
      (this.$refs.theResult as { updateFoodList: () => void }).updateFoodList();
    },
    increaseProgressBar() {
      const progressBar = this.$refs.progressBar as typeof TheProgressBar;
      progressBar.updateProgress();
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    }
  }
}
</script>

<style scoped>
ion-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 9.2rem;
  background: #fff;
  z-index: 1;
  overflow: hidden;
}

ion-header::after {
  display: none;
}

ion-content {
  --background: #fff;
  --ion-text-color: black;
  max-height: 100%;
  overflow: hidden;
}

.swiper-no-swiping {
  pointer-events: none;
}
</style>
