<script setup>
import { ref, computed } from "vue";

const count = ref(0);

const increaseCount = () => {
  count.value++;
};

const decreaseCount = () => {
  if (count.value > 0) {
    count.value--;
  }
};

const oddOrEven = computed(() => {
  return count.value % 2 === 0 ? "Even" : "Odd";
});
</script>

<template>
  <div class="counter-app">
    <div class="counter-box">
      <h1 class="counter-value">{{ count }}</h1>
      <div class="button-group">
        <button class="button increase" @click="increaseCount">Increase</button>
        <button
          class="button decrease"
          @click="decreaseCount"
          :disabled="count === 0"
        >
          Decrease
        </button>
      </div>
      <p class="odd-or-even">
        <span class="label">Count is:</span>
        <span class="value" :class="oddOrEven.toLowerCase()">{{
          oddOrEven
        }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.counter-app {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter-box {
  width: 400px;
  text-align: center;
  padding: 40px 20px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.counter-value {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}

.button {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s, box-shadow 0.3s;
}

.increase {
  background-color: #4caf50;
  color: #fff;
}

.increase:hover {
  background-color: #45a045;
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.decrease {
  background-color: #f44336;
  color: #fff;
}

.decrease:hover {
  background-color: #e53935;
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.decrease:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.decrease:disabled:hover {
  transform: none;
  box-shadow: none;
}

.odd-or-even {
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.label {
  margin-right: 10px;
  color: #666;
}

.value {
  padding: 5px 15px;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
}

.value.even {
  background-color: #4caf50;
  color: #fff;
}

.value.odd {
  background-color: #f44336;
  color: #fff;
}
</style>
