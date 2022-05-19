<script>
  import { mapActions, mapState } from "pinia";
  import { useTweetsStore } from "../../store/tweets/index";
  import Close from "../BaseIcon/icons/close.vue";

  export default {
    name: "Image Viewer",

    components: {
      Close,
    },

    props: {
      image: {
        type: String,
        default: () => "",
      },
    },

    data() {
      return {
        currentImage: 0,
      };
    },

    computed: {
      ...mapState(useTweetsStore, ["tweetViewerImg"]),
    },

    methods: {
      ...mapActions(useTweetsStore, ["closeImgViewer", "openImgViewer"]),

      handleClickOutside: function (e) {
        const object = {
          target: e.target,
          ref: this.$refs.imgViewerWrapper,
        };
        if (object.target !== object.ref) return;
        this.closeImgViewer();
      },
    },
  };
</script>

<template>
  <div ref="imgViewerWrapper" class="lightbox" @click="handleClickOutside">
    <div class="lightbox-wrapper">
      <div class="lightbox-wrapper-item">
        <img :src="this.tweetViewerImg" class="rounded-md" alt="" />
      </div>
    </div>
    <div
      class="lightbox-close-icon cursor-pointer"
      @click="this.closeImgViewer"
    >
      <Close />
    </div>
    <!-- <div v-if="hasMultipleImages" class="lightbox-controls">
      <div class="lightbox-controls-left" @click="decreaseImageState">
        <BaseIcon icon="left" />
      </div>
      <div class="lightbox-controls-right" @click="increaseImageState">
        <BaseIcon icon="right" />
      </div>
    </div> -->
    <!-- <div v-if="hasMultipleImages" class="lightbox-current-image">
      {{ `${currentImage + 1} / ${images.length}` }}
    </div> -->
  </div>
</template>
