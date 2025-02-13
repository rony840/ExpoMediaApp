import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import AppNavigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
