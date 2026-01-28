import { useNavigation, useRouter } from 'expo-router';
import { Appbar } from 'react-native-paper';

export default function CustomAppBar() {
  const navigation = useNavigation();
  const router = useRouter();
  const canGoBack = navigation.canGoBack?.() ?? false;

  return (
    <Appbar.Header>
      {canGoBack ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => router.push('/second')}
        />
      )}
      <Appbar.Content title="MD Nav Demo" />
    </Appbar.Header>
  );
}
