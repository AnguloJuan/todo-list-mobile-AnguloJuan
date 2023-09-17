import { Stack } from 'expo-router/stack';

export default function Layout() {
    return <Stack screenOptions={{
        header: () => null,
        headerShown: false,
        contentStyle: {
            backgroundColor: '#111827',
        },
    }} />;
}