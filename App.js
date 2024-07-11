import { Button, Linking, SafeAreaView, StyleSheet } from 'react-native';

import { useForegroundPermissions } from 'expo-location';

export default function App() {
  const [permission, requestPermission] = useForegroundPermissions();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.paragraph}
        onPress={requestPermission}
        title={`${permission?.granted}`}
      ></Button>
      <Button
        style={styles.paragraph}
        onPress={Linking.openSettings}
        title="Open Settings"
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
