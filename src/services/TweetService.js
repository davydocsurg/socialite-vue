import API, { Endpoints } from "../api/axios";

export const SendTweetService = async (payload) => {
  return await API.post(Endpoints.createTweet, payload);
};

export const FetchTweetsService = async () => {
  return await API.get(Endpoints.tweets);
};
