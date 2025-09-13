import { createRouter, createWebHistory } from 'vue-router'
import NoteBook from '@/views/NoteBook.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: NoteBook }],
})

export default router
