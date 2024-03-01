<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>
<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

const router = useRouter()
const userStore = useUserStore()
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (
    to.meta.access === 'canAdmin' &&
    userStore.loginUser?.userRole !== 'admin'
  ) {
    next('/noAuth')
    return
  }

  next()
})
</script>

<style scoped></style>
