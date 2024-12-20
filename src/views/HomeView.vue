<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <div class="counter-app">
    <div class="counter-box">
      <h1 class="counter-value">{{ storeCounter.count }}</h1>
      <div class="button-group">
        <button class="button increase" @click="storeCounter.increaseCount">
          Increase
        </button>
        <button
          class="button decrease"
          @click="storeCounter.decreaseCount"
          :disabled="storeCounter.count === 0"
        >
          Decrease
        </button>
      </div>
      <p class="odd-or-even">
        <span class="label">Count is:</span>
        <span class="value" :class="storeCounter.oddOrEven.toLowerCase()">{{
          storeCounter.oddOrEven
        }}</span>
      </p>

      <div style="margin: 25px 0">
        <hr />
      </div>
      <h3>Edit Counter</h3>
      <input
        type="number"
        v-model="storeCounter.count"
        class="counter-input"
        placeholder="Enter a number"
      />
    </div>
  </div>
</template>

<style scoped>
.counter-app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter-box {
  width: 450px;
  text-align: center;
  padding: 40px 20px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.counter-box:hover {
  transform: scale(1.02);
}

.counter-value {
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}

.button {
  padding: 15px 30px;
  font-size: 20px;
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
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.decrease {
  background-color: #f44336;
  color: #fff;
}

.decrease:hover {
  background-color: #e53935;
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.decrease:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
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
  padding: 8px 20px;
  border-radius: 12px;
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

.counter-input {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-top: 20px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.counter-input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
}
</style>
