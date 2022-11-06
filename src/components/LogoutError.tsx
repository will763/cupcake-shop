import { showMessage } from "react-native-flash-message";

export default function(){
    return (
        showMessage({
        message: "Logout Error",
        description: "something went wrong",
        type: "default",
        backgroundColor: "#fefefe",
        color: '#ff0000',
        duration: 5000,
        titleStyle: { fontSize: 18 },
        hideOnPress: true,
      })
    )
}