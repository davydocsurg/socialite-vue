<script>
  import { useTweetsStore } from "../../store/tweets/index";
  import { mapActions, mapState } from "pinia";
  import Loading from "../loaders/Loading.vue";

  export default {
    components: {
      Loading,
    },

    computed: {
      ...mapState(useTweetsStore, [
        "allTweets",
        "tweetPicsUrl",
        "tweepProfUrl",
      ]),
    },

    mounted() {
      console.log(this.tweepProfUrl);
    },
  };
</script>

<template lang="">
  <section>
    <div v-if="this.allTweets !== null">
      <div class="tweet" v-for="(tweet, slug) in this.allTweets" :key="slug">
        <div class="tweet-owner">
          <img :src="this.tweepProfUrl + tweet.tweep.profile_picture" />
        </div>
        <div class="tweet-content">
          <div class="tweet-content-header">
            <p>
              <span class="text-xl">
                {{ tweet.tweep.first_name + " " + tweet.tweep.last_name }}
              </span>
              <span class="nickname text-gray-300">
                @{{ tweet.tweep.handle }}
              </span>
              <!-- <span>&#183;</span> -->
              <!-- <span class="created-at">
                {{ moment(tweet.created_at).fromNow() }}
              </span> -->
            </p>
          </div>
          <div class="tweet-content-body">
            <p>
              {{ tweet.tweet_text }}
            </p>
            <br />
            <div
              v-if="tweet.tweet_photo !== null"
              class="tweet-content-body-images"
            >
              <div class="tweet-content-body-images-wrapper">
                <!-- v-for="(tweetPhoto, i) in tweet"
                  :key="i" -->
                <div class="tweet-content-image-item">
                  <img :src="this.tweetPicsUrl + tweet.tweet_photo" />
                  <!-- @click="$store.dispatch('setLightbox', tweetImages)" -->
                </div>
              </div>
            </div>
          </div>
          <div class="tweet-content-actions">
            <div class="action-item comment">
              <Comment />
              <span>5</span>
            </div>
            <div class="action-item retweet">
              <Retweet />
              <span>5</span>
            </div>
            <div class="action-item like">
              <Like />
              <span>5</span>
            </div>
            <div class="action-item comment">
              <Share />
            </div>
          </div>
          <!-- <div class="tweet-content-edit-actions">
            <div class="action-item cancel" @click="handleCancelEdit">
              Cancel
            </div>
            <div class="action-item save" @click="handleEditTweet">Save</div>
          </div> -->
        </div>
        <!-- <div class="tweet-edit-button">
          <div
            class="tweet-edit-button-icon"
            @click="isEditMenuOpened = !isEditMenuOpened"
          >
            <BaseIcon icon="editTweet" />
          </div>
          <EditTweetPopup
            v-if="isEditMenuOpened"
            :tweet-id="tweetData.id"
            @delete-tweet="handleDelete"
            @edit-tweet="handleClickToEdit"
          />
        </div> -->
      </div>
    </div>

    <div v-else>
      <Loading />
    </div>
  </section>
</template>
