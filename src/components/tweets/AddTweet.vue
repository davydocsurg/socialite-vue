<script>
  import { mapActions, mapState } from "pinia";
  import { useAuthStore } from "../../store/auth/index";

  export default {
    computed: {
      ...mapState(useAuthStore, ["authTweep", "profilePicsUrl"]),
    },

    mounted() {
      setTimeout(() => {
        console.log(this.profilePicsUrl + this.authTweep.profile_picture);
        // console.log(this.profPicsUrl() + this.authTweepPP());
      }, 1200);
    },

    methods: {
      // authTweepPP: () => this.authTweep.profile_picture,
    },
  };
</script>

<template>
  <div class="add-tweet">
    <div class="add-tweet-profile">
      <span v-if="this.authTweep !== null">
        <img :src="this.profilePicsUrl + this.authTweep.profile_picture" />
      </span>
      <span v-else>
        <Spinner />
      </span>
    </div>
    <!-- <div class="add-tweet-content">
      <div class="tweet-section">
        <textarea
          v-model="tweetContent.text"
          placeholder="What's happening?"
        />
        <div
          v-if="tweetContent.imageList"
          class="tweet-section-images"
        >
          <div
            v-for="(image, i) in tweetContent.imageList"
            :key="i"
            class="image-container"
          >
            <img :src="image.url">
            <div
              class="close-button"
              @click="deleteImage(i)"
            >
              <base-icon icon="close" />
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <div class="controls-media">
          <div
            class="controls-media-item"
            @click="$refs.uploadImageInput.click()"
          >
            <base-icon icon="image" />
            <input
              ref="uploadImageInput"
              type="file"
              accept="image/*"
              hidden
              @change="showFiles"
            >
          </div>
          <div class="controls-media-item">
            <base-icon icon="gif" />
          </div>
          <div class="controls-media-item">
            <base-icon icon="graph" />
          </div>
          <div class="controls-media-item">
            <base-icon icon="schedule" />
          </div>
        </div>
        <div class="controls-submit">
          <button
            :disabled="!hasTweetText()"
            @click="handleSubmit"
          >
            Tweet
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>
