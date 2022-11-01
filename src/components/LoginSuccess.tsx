
import { showMessage } from "react-native-flash-message";


export default function () {
  return (
      showMessage({
        message: "Login Successfully",
        type: "success",
        titleStyle: { fontSize: 18 },
        duration: 1700
      })
  )
}