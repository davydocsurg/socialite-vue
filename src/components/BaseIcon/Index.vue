<script>
  export default {
    name: "BaseIcon",
    props: {
      icon: {
        type: String,
        default: "home",
      },
    },
    computed: {
      iconComponent() {
        return require(`./icons/${this.icon}`).default;
      },
    },
  };
</script>

<template>
  <component :is="iconComponent" />
</template>
