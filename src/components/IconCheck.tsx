import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg opacity={.4} width={27} height={27} viewBox='0 0 20 20' xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-2h24v24H-2z" />
      <Path
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0ZM7.29 14.29 3.7 10.7a.997.997 0 1 1 1.41-1.41L8 12.17l6.88-6.88a.997.997 0 1 1 1.41 1.41L8.7 14.29a.996.996 0 0 1-1.41 0Z"
        fill="#0f0"
      />
    </G>
  </Svg>
)

export default SvgComponent
