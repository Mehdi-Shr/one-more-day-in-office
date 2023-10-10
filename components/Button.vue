<template>
    <button class="btn" :style="buttonStyles">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      backgroundColor: {
        type: String,
        default: "#F9DCFF"
      },
      textColor: {
        type: String,
        default: "black"
      },
      borderStyle: {
        type: String,
        default: "2px solid transparent"
      }
    },
    computed: {
      buttonStyles() {
        return {
          backgroundColor: this.backgroundColor,
          color: this.textColor,
          border: this.borderStyle
        };
      },
    }
  };
  </script>
  
  <style scoped lang="scss">
  .btn {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .btn:hover {
    background: none !important;
    color: $light-purple !important;
    border: 2px solid $light-purple !important;
  }
  </style>