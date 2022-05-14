<script>
  import { ref, getCurrentInstance } from "vue";
  import { mapActions, mapState } from "pinia";
  import { useAuthStore } from "../../store/auth/index";
  import { useTweetsStore } from "../../store/tweets/index";

  export default {
    setup(props, context) {
      const tweetFields = ref(defaultTweetFields());
      const tweet = useTweetsStore();

      const app = getCurrentInstance();

      function defaultTweetFields() {
        return {
          text: "",
          photo: "",
        };
      }

      function hasTweetText() {
        return tweetFields.value.text.length > 0 && tweetFields.value.text;
      }

      function showFiles(e) {
        const file = e.target.files[0];
        let reader = new FileReader();

        let limit = 1024 * 1024 * 2;
        if (file["size"] > limit) {
          tweetFields.value.photo = "";
          alert("File is too large! It must be less than 2MB.");

          return false;
        }

        reader.onloadend = (file) => {
          tweetFields.value.photo = reader.result;
          // console.log(tweetFields.value.photo);
        };
        reader.readAsDataURL(file);
      }

      function removeImg() {
        tweetFields.value.photo = "";
      }

      return {
        tweetFields,
        hasTweetText,
        showFiles,
        removeImg,
      };
    },

    computed: {
      ...mapState(useAuthStore, ["authTweep", "profilePicsUrl"]),
    },

    methods: {
      // authTweepPP: () => this.authTweep.profile_picture,
    },
  };
</script>

<template>
  <div class="i">
    <div class="add-tweet" v-if="this.authTweep !== null">
      <div class="add-tweet-profile">
        <!-- <span v-if="this.authTweep !== null"> -->
        <img :src="this.profilePicsUrl + this.authTweep.profile_picture" />
      </div>
      <div class="add-tweet-content">
        <div class="tweet-section">
          <textarea
            v-model="tweetFields.text"
            placeholder="What's happening?"
          />
          <div v-if="tweetFields.photo !== ''" class="tweet-section-images">
            <div class="image-container">
              <!-- v-for="(image, i) in tweetFields.photo"
              :key="i" -->
              <img :src="tweetFields.photo" class="rounded-md" />
              <div class="close-button" @click="removeImg">
                <Close />
              </div>
            </div>
          </div>
        </div>
        <div class="controls">
          <div class="controls-media">
            <div class="controls-media-item">
              <Image @click="$refs.uploadImageInput.click()" />
              <input
                ref="uploadImageInput"
                type="file"
                accept="image/*"
                hidden
                @change="showFiles"
              />
            </div>
            <div class="controls-media-item">
              <Gif />
            </div>
            <div class="controls-media-item">
              <Graph />
            </div>
            <div class="controls-media-item">
              <Schedule />
            </div>
          </div>
          <div class="controls-submit">
            <button :disabled="!hasTweetText()">Tweet</button>
            <!-- @click="handleSubmit" -->
          </div>
        </div>
      </div>
      <!-- </span> -->
    </div>
    <span v-else>
      <Spinner />
    </span>
  </div>
</template>
