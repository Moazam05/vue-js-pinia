<script setup>
import { ref } from "vue";

const count = ref(0);

const increaseCount = () => {
  count.value++;
};

const decreaseCount = () => {
  if (count.value > 0) {
    count.value--;
  }
};
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
    </div>
  </div>
</template>

<style scoped>
/* Overall app container styling */

.counter-app {
  width: 400px;
  margin: 0 auto;
}

/* Counter container */
.counter-box {
  text-align: center;
  padding: 40px 20px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

/* Counter value styling */
.counter-value {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 30px;
}

/* Buttons container */
.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Buttons styling */
.button {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
}

.increase {
  background-color: #4caf50;
  color: #fff;
}

.increase:hover {
  background-color: #45a045;
  transform: scale(1.1);
}

.decrease {
  background-color: #f44336;
  color: #fff;
}

.decrease:hover {
  background-color: #e53935;
  transform: scale(1.1);
}

.decrease:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.decrease:disabled:hover {
  transform: none;
}
</style>
