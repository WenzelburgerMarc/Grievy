import { reactive } from "vue";

interface FoodItem {
  name: string;
  rating: number;
}

interface State {
  foodList: FoodItem[];
}

const state = reactive({
  foodList: [
    { name: "pizza", rating: 0 },
    { name: "kebap", rating: 0 },
    { name: "spaghetti", rating: 0 },
    { name: "salad", rating: 0 },
  ] as FoodItem[],
});

const mutations = {
  sortFoodListByRating: (state: State): void => {
    state.foodList.sort((a: FoodItem, b: FoodItem) => b.rating - a.rating);
  },

};

export default {
  state: state,
  mutations,
};
