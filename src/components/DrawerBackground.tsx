import { View } from 'react-native';
import Logout from './Logout';

export default function() {
  return (
    <View style={{
        backgroundColor:'#ffffff',
        flex:1,
        elevation:4,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 16
        }}

    >
      <Logout />
    </View>
  );
}