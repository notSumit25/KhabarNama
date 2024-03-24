import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";
const HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4110eb20bbee42ca98322aa6cc525cf3"
      )
      .then((response) => setArticles(response.data.articles));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { article: item })}
    >
      <View className="mb-5 rounded-lg overflow-hidden">
        <Image
          className="w-full h-48 object-cover"
          source={{ uri: item.urlToImage }}
        />
        <Text className="text-lg font-bold p-2">{item.title}</Text>
        <Text className="p-2 pb-5 text-md">{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex flex-1 p-2">
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default HomeScreen;
