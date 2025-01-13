import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className="w-full flex-1 items-start justify-start px-4">
      <Text className="w-full text-center text-3xl">SUP BRO</Text>
    </SafeAreaView>
  )
}
