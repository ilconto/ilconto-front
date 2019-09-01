<template>
  <span class="loading-spinner"></span>
</template>

<script>
export default {
  name: 'spinner'
}
</script>

<style scoped>

.loading-spinner {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 5px solid var(--primary);
  border-top: 5px solid var(--secondary);
  margin: auto;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>