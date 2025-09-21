<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const title = defineModel<string>('title', { required: true })

defineProps({
  subTitle: {
    required: true,
    type: String,
  },
})
defineEmits(['update:subTitle'])
</script>

<template>
  <!-- Pre 3.4 -->
  <label for="title">Title:</label>
  <input class="title-input" v-model="title" />

  <label for="subTitle">Subtitle:</label>
  <!-- Post 3.4 -->
  <input
    class="title-input"
    type="text"
    :value="subTitle"
    @input="$emit('update:subTitle', ($event.target as HTMLInputElement).value)"
  />
</template>

<style scoped>
.title-input {
  width: 10rem;
  border: 1px solid #000;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
}
</style>
