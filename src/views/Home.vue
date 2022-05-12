<script>
  import AddTweet from "../components/tweets/AddTweet.vue";
  import Tweet from "../components/tweets/Tweet.vue";

  export default {
    components: {
      AddTweet,
      Tweet,
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
