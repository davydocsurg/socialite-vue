<script>
  import BaseIcon from "../BaseIcon/Index.vue";

  export default {
    name: "SidebarItem",
    components: {
      BaseIcon,
    },
    props: {
      icon: {
        type: String,
        default: "more",
      },
      iconColor: {
        type: String,
        default: "#fff",
      },
      to: {
        type: String,
        default: "",
      },
      required: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      isStringAndValid: function (str) {
        return str && typeof str == "string" && str.length > 0;
      },
    },
  };
</script>

<template>
  <component :is="required ? 'router-link' : 'div'" :to="required ? to : ''">
    <div class="sidebar-item">
      <div class="sidebar-item-logo">
        <BaseIcon :icon="icon" :icon-color="iconColor" />
      </div>
      <div class="sidebar-item-content">
        <slot />
      </div>
    </div>
  </component>
</template>

<style lang="scss">
  // @import "@/assets/theme/colors.scss";
</style>
