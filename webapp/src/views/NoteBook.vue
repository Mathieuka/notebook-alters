<script setup lang="ts">
// import { useEditor, EditorContent } from '@tiptap/vue-3'
// import StarterKit from '@tiptap/starter-kit'
import { onMounted, ref } from 'vue'

const content = ref(``)

// const editor = useEditor({
//   content: content.value,
//   extensions: [StarterKit],
//   autofocus: true,
// })

// watchEffect(() => {
//   editor.value?.commands.setContent(content.value)
// })

onMounted(async () => {
  const response = await fetch('http://localhost:8000')
  const data = await response.text()
  content.value = `<p>${data}</p>`
})

// onUnmounted(() => {
//   editor.value?.destroy()
// })
</script>

<template>
  <div class="container">
    <!-- <editor-content :editor="editor" /> -->
    <input type="text" />
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
  border: 3px solid #ccc;
  border-radius: 8px;
}

.box-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 600px;

  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  gap: 10px;
}

.box {
  min-height: 100px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
