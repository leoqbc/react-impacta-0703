import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Headline, Button, Provider as PaperProvider, ActivityIndicator, Colors } from 'react-native-paper';
import PerfilCard from './PerfilCard';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoadUsers = async () => {
    setLoading(true);

    const result = await fetch("https://api.github.com/repos/v8/v8/contributors");
    const user = await result.json();

    setLoading(false);
    setUsers(user);
  }

  useEffect(() => {
    alert("Usando o alera do sistema operacional");
  }, []);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Headline style={styles.headline}>Github Search Contribs</Headline>
        <Text>Carrega do Github todos os contribuidores do repo NodeJS</Text>
        <Button mode="contained" onPress={handleLoadUsers} style={styles.button}>Carregar Perfis</Button>
        <ScrollView>
          <LoadingScreen loading={loading} />
          {users.map((user, index) => <PerfilCard key={index} {...user} />)}
        </ScrollView>
        <StatusBar style="dark" />
      </View>
    </PaperProvider>
  );
}

function LoadingScreen({ loading }) {
  if (loading) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} color={Colors.blueA700} />
  }
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#CCC'
  },
  headline: {
    color: '#1c3438',
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
  },
  button: {
    marginVertical: 10
  }
});
