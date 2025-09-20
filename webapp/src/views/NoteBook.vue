<script setup lang="ts">
import { onMounted, ref } from 'vue'

const content = ref(``)

onMounted(async () => {
  const response = await fetch('http://localhost:8000')
  const data = await response.text()
  content.value = `<p>${data}</p>`
})
</script>

<template>
  <div class="container">
    <input class="title-input" />
    <textarea class="content-input" />
    <div class="box-container">
      <div class="box">Value</div>
      <div class="box">Value</div>
      <div class="box">Value</div>
      <div class="box">Value</div>
    </div>
  </div>
</template>

<style>
.container {
  flex-direction: column;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #ccc;
  border-radius: 0.2rem;
}

.title-input {
  width: 10rem;
  border: 1px solid #000;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
}

.content-input {
  width: 25rem;
  height: 5rem;
  border: 1px solid #000;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.box-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 600px;
  background-color: #f0f0f0;
  border: 0.01rem solid #000;
  border-radius: 0.1rem;
  gap: 0.4rem;
  padding: 0.3rem;
}

.box {
  min-height: 6rem;
  background-color: #f0f0f0;
  border: 0.02rem solid #000;
  border-radius: 0.2rem;
  padding: 0.2rem;
}
</style>
