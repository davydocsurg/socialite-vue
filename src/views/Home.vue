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
    },
  };
</script>

<template>
  <div class="home">
    <AddTweet />
    <hr class="gap" />
    <div class="tweet-wrapper">
      <Tweet />
    </div>
  </div>
</template>
