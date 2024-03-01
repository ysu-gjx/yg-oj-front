<template>
  <div>{{ msg }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
