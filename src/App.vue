<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app-container">
    <main class="content">
      <RouterView />
    </main>
    <header class="header">
      <nav class="nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  background-color: transparent;
}

.content {
  text-align: center;
  width: 100%;
  padding: 20px;
}
</style>
