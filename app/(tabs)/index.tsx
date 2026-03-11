import { View, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 items-center justify-center px-6 pt-16 pb-8">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome
        </Text>
        <Text className="mt-2 text-center text-base text-gray-500 dark:text-gray-400">
          Start building your mobile app
        </Text>

        <View className="mt-8 w-full gap-4">
          <View className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
            <Text className="text-lg font-semibold text-gray-900 dark:text-white">
              Get Started
            </Text>
            <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Edit app/(tabs)/index.tsx to start building your app.
            </Text>
          </View>

          <Link href="/modal" asChild>
            <View className="items-center rounded-2xl bg-blue-500 px-6 py-4">
              <Text className="text-base font-semibold text-white">
                Open Modal
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
