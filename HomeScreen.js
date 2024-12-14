import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, Card, Icon } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/400x800.png?text=Background' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text h3 style={styles.title}>
          Welcome to My App
        </Text>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Explore the App</Text>
          <Text style={styles.cardContent}>
            This app helps you navigate smoothly between screens and explore exciting features!
          </Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
            buttonStyle={styles.button}
            icon={
              <Icon
                name="arrow-right"
                type="feather"
                color="white"
                containerStyle={styles.icon}
              />
            }
          />
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    marginBottom: 15,
    color: '#555',
  },
  button: {
    backgroundColor: '#1E88E5',
    borderRadius: 5,
  },
  icon: {
    marginLeft: 5,
  },
});
