import '../global.css';

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ title: '' }}>
      <Stack.Screen name="/" />
    </Stack>
  );
}
