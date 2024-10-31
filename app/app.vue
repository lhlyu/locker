<template>
  <div>
    {{ JSON.stringify(user) }}
  </div>
</template>

<script setup lang="ts">
const user = fetch('/api/user')
</script>
