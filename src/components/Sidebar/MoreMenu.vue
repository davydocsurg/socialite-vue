<script>
  import BaseIcon from "../BaseIcon/Index.vue";
  import { moreMenuItems } from "../Sidebar/constants";

  export default {
    name: "MoreMenu",
    components: {
      BaseIcon,
    },
    data: () => {
      return {
        moreMenuItems,
      };
    },
  };
</script>

<template>
  <div class="more-menu">
    <div v-for="item in moreMenuItems" :key="item.name" class="more-menu-item">
      <div class="icon">
        <base-icon :icon="item.icon" />
      </div>
      <div class="content">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  // @import "@/assets/theme/colors.scss";
</style>
