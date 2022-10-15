import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={20}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.737 0H2.105C.947 0 0 1.064 0 2.364v16.545h2.105V2.364h12.632V0Zm3.158 4.727H6.315c-1.157 0-2.104 1.064-2.104 2.364v16.545c0 1.3.947 2.364 2.105 2.364h11.579C19.053 26 20 24.936 20 23.636V7.091c0-1.3-.947-2.364-2.105-2.364Zm0 18.91H6.315V7.09h11.58v16.545Z"
      fill="#0F0"
      fillOpacity={0.7}
    />
  </Svg>
)

export default SvgComponent
