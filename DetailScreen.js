import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Card } from 'react-native-elements';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Icon
        name="check-circle"
        type="feather"
        size={80}
        color="#4CAF50"
        containerStyle={styles.icon}
      />
      <Text h4 style={styles.title}>
        Detail Page
      </Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardText}>
          This is the detail page. Here you can add more information about the app or features.
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
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
  cardText: {
    color: '#555',
  },
});
