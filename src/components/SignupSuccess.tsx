import { showMessage } from "react-native-flash-message";

export default function(){
    return (
        showMessage({
            message: "Successfully Registered",
            type: "success",
            titleStyle: { fontSize: 18 },
            duration: 1700
        })
    )
}