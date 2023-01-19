import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function BackButton() {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={goBack}
    >

    </TouchableOpacity>
  )
}