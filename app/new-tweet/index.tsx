import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const user = {
  id: "987654321",
  name: "Zuck",
  username: "zuck",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
};

const NewTweet = () => {
  const [tweet, setTweet] = useState("");
  const router = useRouter();
  const handlePost = () => {
    console.warn(tweet);
    setTweet("");

    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href='../' style={{ fontSize: 18 }}>
            Cancel
          </Link>
          <Pressable style={styles.button} onPress={handlePost}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContianer}>
          <Image
            source={{ uri: user.image }}
            alt='profile image'
            style={styles.image}
          />

          <TextInput
            placeholder="What's happening?"
            numberOfLines={5}
            multiline
            style={{ flex: 1 }}
            value={tweet}
            onChangeText={setTweet}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: { color: "#fff", fontWeight: "600" },

  container: {
    padding: 10,
    flex: 1,
  },
  image: {
    borderRadius: 50,
    aspectRatio: 1,
    width: 50,
    marginRight: 10,
  },
  inputContianer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
