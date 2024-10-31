<template>
  <div>
    {{ JSON.stringify(user) }}
  </div>
</template>

<script setup lang="ts">
const { data: user } = await useFetch('/api/user')
</script>
