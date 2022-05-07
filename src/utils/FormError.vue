<script>
  export default {
    props: {
      errorMsg: String,
    },

    // data:()=>{

    // }
  };
</script>

<template>
  <div>
    <span class="text-red-600">
      {{ errorMsg }}
    </span>
  </div>
</template>
