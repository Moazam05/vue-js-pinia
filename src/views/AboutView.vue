<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <div class="counter-app" @click="storeCounter.increaseCount">
    <div class="counter-box">
      <h2 style="margin-bottom: 20px">About Page</h2>

      <h1 class="counter-value">{{ storeCounter.count }}</h1>

      <span class="label">Click Me</span>
    </div>
  </div>
</template>

<style scoped>
.counter-app {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
</style>
