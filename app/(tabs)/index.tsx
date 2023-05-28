import { StyleSheet, FlatList, Pressable } from "react-native";

import { View } from "../../components/Themed";
import Tweet from "../../components/tweets";
import tweets from "../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Pressable
        onPress={() => router.push("/new-tweet")}
        style={styles.floatingButton}
      >
        <Entypo name='plus' size={24} color='white' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
