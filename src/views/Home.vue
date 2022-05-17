<script>
  import AddTweet from "../components/tweets/AddTweet.vue";
  import Tweet from "../components/tweets/Tweet.vue";
  import { mapActions, mapState } from "pinia";
  import { useTweetsStore } from "../store/tweets/index";

  export default {
    components: {
      AddTweet,
      Tweet,
    },

    mounted() {
      console.log("mount");
      // this.getAllTweets();
    },

    methods: {
      ...mapActions(useTweetsStore, ["getAllTweets"]),

      tweetSent() {
        this.$toast.success("Tweet sent!");
      },

      tweetErr() {
        this.$toast.error("Oops! Something went wrong");
      },
    },
  };
</script>

<template>
  <section class="home">
    <AddTweet
      @tweet-error="tweetErr"
      @tweet-sent="tweetSent"
      @refreshTweets="this.getAllTweets"
    />
    <hr class="gap" />
    <div class="tweet-wrapper">
      <Tweet />
    </div>
  </section>
</template>
