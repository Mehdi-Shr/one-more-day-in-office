<template>
    <button class="button">
      <slot/>
    </button>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style scoped>
    .button {
      display: inline-block;
      margin: 0.5em 0;
      padding: 1em 2em;
      background: #F9DCFF;
      border: none;
      border-radius: 5px;
      color: black;
      font-size: 1em;
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;
    }
  
    .button:hover {
      background: #CDAACE;
      color: #F9DCFF;
      border: 2px solid #F9DCFF;
    }
  </style>