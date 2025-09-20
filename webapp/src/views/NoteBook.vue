<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

const content = ref(``)

const editor = useEditor({
  content: content.value,
  extensions: [StarterKit],
  autofocus: true,
})

watchEffect(() => {
  editor.value?.commands.setContent(content.value)
})

onMounted(async () => {
  const response = await fetch('http://localhost:8000')
  const data = await response.text()
  content.value = `<p>${data}</p>`
})

onUnmounted(() => {
  editor.value?.destroy()
})
</script>

<template>
  <div class="container">
    <editor-content :editor="editor" />
  </div>
</template>

<style></style>
