<script>
  // import iconComponent from `./icons/${this.icon}.vue`

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
        return new URL(`./icons/${this.icon}`, import.meta.url).default;
      },
    },
  };
</script>

<template>
  <div class="">
    {{ icon }}
    <component :is="iconComponent" />
  </div>
</template>
