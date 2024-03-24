// DetailsScreen.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { article } = route.params;
    console.log(article.content);

    return (
        <ScrollView>
            <Image
                style={{ width: '100%', height: 200 }}
                source={{ uri: article.urlToImage }}
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{article.title}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>{article.author}</Text>
                <Text style={{ fontSize: 18 }}>
                    {article.description ? article.description : 'Description not available'}
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {article.content ? article.content : 'Content not available'}
                </Text>
            </View>
        </ScrollView>
    );
};

export default DetailsScreen;