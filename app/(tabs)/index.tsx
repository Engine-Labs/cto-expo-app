import { SafeAreaView, ScrollView, Text } from "@/components/ui";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <ScrollView className="flex-1" contentContainerClassName="p-6">
        <Text variant="h1" className="mb-2">
          Welcome
        </Text>
        <Text variant="muted">
          Start building your app by editing this screen.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
