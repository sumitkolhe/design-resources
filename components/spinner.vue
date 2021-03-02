<template>
  <div class="spinner"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style>
.spinner {
  display: inline-block;
  border: 4px solid #ff4646;
  border-left-color: #ffffff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: donut-spin 1.2s linear infinite;
}

@keyframes donut-spin {
  to {
    transform: rotate(1turn);
  }
}
</style>