import { defineStore } from "pinia";
import { FetchTweetsService } from "../../services/TweetService";

export const useTweetsStore = defineStore("tweetStore", {
  state: () => {
    return {
      allTweets: null,
      tweetDetails: null,
      tweetPicsUrl: "http://localhost:8000/tweets/photos/",
      tweepProfUrl: "http://localhost:8000/profile/photos/",
      loading: false,
      errors: {},
      tweet_text: "",
      tweet_photo: "",
    };
  },

  actions: {
    async getAllTweets() {
      const res = await FetchTweetsService();

      try {
        if (res.status == 400) {
          this.errors = res.message;
          console.warn(this.errors);
          // this.$toast.error("Oops! Something went wrong");
        } else if (res.status == 200) {
          // this.$toast.success("Tweets!");
          this.allTweets = res.data;
          // console.log(this.allTweets);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  async createTweet() {
    const res = await SendTweetService();

    try {
      if (res.status == 400) {
        this.errors = res.message;
        console.warn(this.errors);
        // this.$toast.error("Oops! Something went wrong");
      } else if (res.status == 200) {
        this.getAllTweets();
        // this.allTweets = res.data;
        // console.log(this.allTweets);
      }
    } catch (error) {
      console.error(error);
    }
  },
});
