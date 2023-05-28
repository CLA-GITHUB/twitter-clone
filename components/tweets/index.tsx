import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Entypo } from "@expo/vector-icons";

import { TweetTypes } from "../../types";
import IconButton from "./icon-buttons";

type TweetProps = {
  tweet: TweetTypes;
};

const Tweet: FC<TweetProps> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: tweet.user?.image }}
        alt='profile image'
        style={styles.userImage}
      />
      <View style={styles.contentContainer}>
        <View style={styles.namesContainer}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username} · 2h</Text>
          <Entypo
            name='dots-three-horizontal'
            size={16}
            color='gray'
            style={{ marginLeft: "auto" }}
          />
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && (
          <Image
            source={{ uri: tweet?.image }}
            alt='profile image'
            style={styles.image}
          />
        )}
        <View style={styles.footer}>
          <IconButton icon='comment' text={tweet.numberOfComments} />
          <IconButton icon='retweet' text={tweet.numberOfRetweets} />
          <IconButton icon='heart' text={tweet.numberOfLikes} />
          <IconButton icon='chart' text={tweet.impressions || 0} />
          <IconButton icon='share-apple' />
        </View>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  content: {},
  contentContainer: {
    marginLeft: 5,
    flex: 1,
  },
  image: {
    marginVertical: 5,
    borderRadius: 15,
    width: "100%",
    aspectRatio: 19 / 9,
  },
  name: {
    fontWeight: "600",
  },
  namesContainer: {
    flexDirection: "row",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },

  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});
