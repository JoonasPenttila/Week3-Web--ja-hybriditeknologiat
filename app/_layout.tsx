import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import CustomAppBar from '../components/CustomAppBar';

export default function Layout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          header: () => <CustomAppBar />,
        }}
      />
    </PaperProvider>
  );
}
