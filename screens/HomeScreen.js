import {
    View,
    Text,
    Image,
    ScrollView,
    Linking,
    ActivityIndicator,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { Card, Title, Paragraph, Button } from "react-native-paper";
  import Header from "../components/AppBar";
  import axios from "axios";
  
  const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
  
    const API_KEY = "Your API Key";
  
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&from=2024-09-08&to=2024-09-08&sortBy=popularity&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        setError(error);
      }
    };
  
    useEffect(() => {
      getArticles();
    }, []);
  
  
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          {articles.map((article, index) => (
            <Card key={index} style={{ margin: 10 }}>
              <Card.Cover
                source={{ uri: article.urlToImage }}
                style={{ height: 150, width: "100%" }}
              />
                <Card.Content>
                  <Title>{article.title}</Title>
                  <Paragraph>{article.description}</Paragraph>
                </Card.Content>
              <Card.Actions>
                <Button onPress={() => Linking.openURL(article.url)}>
                  Read More
                </Button>
              </Card.Actions>
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export default HomeScreen;
  