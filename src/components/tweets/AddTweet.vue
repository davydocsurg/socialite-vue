<script>
  import { ref, getCurrentInstance } from "vue";
  import { mapActions, mapState } from "pinia";
  import { useAuthStore } from "../../store/auth/index";
  import { useTweetsStore } from "../../store/tweets/index";
  import { SendTweetService } from "../../services/TweetService";
  import FormError from "../../utils/FormError.vue";

  export default {
    components: {
      FormError,
    },

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

      async function handleSubmit() {
        try {
          const payload = {
            tweet_text: tweetFields.value.text,
            tweet_photo: tweetFields.value.photo,
          };
          const res = await SendTweetService(payload);

          if (res.data.status == 400 && res.data.success === false) {
            tweet.$state.errors = res.data.message;
            context.emit("tweet-error");
            // this.tweetErr();
            console.log(tweet.$state.errors);
          } else if (res.data.status == 200 && res.data.success === true) {
            context.emit("tweet-success");
            console.log(res.data);
            tweetFields.value = defaultTweetFields();
            context.emit("refreshTweets");
          }
        } catch (err) {
          console.error(err);
        }

        // context.emit("submit-click");
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
        handleSubmit,
      };
    },

    computed: {
      ...mapState(useAuthStore, ["authTweep", "profilePicsUrl"]),
      ...mapState(useTweetsStore, ["errors"]),
    },

    methods: {
      ...mapActions(useTweetsStore, ["clearError"]),

      refreshTweets() {
        this.tweet.getAllTweets();
      },
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
        <form @submit.prevent="handleSubmit">
          <div class="tweet-section">
            <textarea
              v-model="tweetFields.text"
              placeholder="What's happening?"
            />
            <!-- @keydown="this.clearError" -->
            <span v-if="this.errors !== null">
              <FormError :errorMsg="this.errors.tweet_text[0]" />
            </span>
            <div v-if="tweetFields.photo !== ''" class="tweet-section-images">
              <div class="image-container">
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
              <button :disabled="!hasTweetText()" type="submit">Tweet</button>
            </div>
          </div>
        </form>
      </div>
      <!-- </span> -->
    </div>
    <span v-else>
      <Spinner />
    </span>
  </div>
</template>
