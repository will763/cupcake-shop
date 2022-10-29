import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";


export default function () {
  const navigation = useNavigation();

  function loginSuccess() {

    showMessage({
      message: "Login Successfully",
      type: "success",
      titleStyle: { fontSize: 18 },
      duration: 1700
    });

    const id = setTimeout(() => {
      navigation.navigate('home');
    }, 2000);

    return () => clearTimeout(id);
  }

}