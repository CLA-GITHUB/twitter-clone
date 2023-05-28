import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/tweets";

const TweetDetailsScreen = () => {
  const { id } = useSearchParams();
  const tweet = tweets.find((tweet) => tweet.id == id);

  if (!tweet) {
    return <Text>Tweet with {id} not found!</Text>;
  }

  return <Tweet tweet={tweet} />;
};

export default TweetDetailsScreen;
