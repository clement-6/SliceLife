import { Stack, usePathname } from 'expo-router';

export default function RootLayout() {
    const pathname = usePathname();

    return (
      <Stack
        screenOptions={{
          animation: pathname === "/screen/(tabs)/user" ? "default" : "none",
          headerTransparent: true,
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: "second" }} />
        <Stack.Screen name="changePassword" options={{ title: "second" }} />
        <Stack.Screen name="switchAccount" options={{ title: "second" }} />
        <Stack.Screen name="ReportIssue" options={{ title: "second" }} />
        <Stack.Screen name="CancelAccount" options={{ title: "second" }} />
      </Stack>
    );
}