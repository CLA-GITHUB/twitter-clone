import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { TweetTypes } from "../../types";

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
        <Text style={styles.name}>{tweet.user.username}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
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
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "600",
  },
});
