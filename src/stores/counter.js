import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  persist: true,

  actions: {
    increaseCount() {
      this.count++;
    },

    decreaseCount() {
      this.count--;
    },
  },

  getters: {
    oddOrEven() {
      return this.count % 2 === 0 ? "Even" : "Odd";
    },
  },
});
