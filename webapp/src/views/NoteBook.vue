<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { onUnmounted } from 'vue'

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js! 🎉</p>",
  extensions: [StarterKit],
  autofocus: true,
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
