<template>
    <div class="footer">
      <p>&copy; 2023 - One more day at the office</p>
    </div>
  </template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
    name: 'Footer',
    });
</script>  

<style scoped lang="scss">
    .footer {
      background-color: $purple;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      width: 100%;
    }
  </style>