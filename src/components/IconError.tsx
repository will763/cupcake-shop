import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    opacity={.4}
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    viewBox="0 0 50 50"
    style={{
      enableBackground: "new 0 0 50 50",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle
      style={{
        fill: "red",
      }}
      cx={25}
      cy={25}
      r={25}
    />
    <Path
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
      d="m16 34 9-9 9-9M16 16l9 9 9 9"
    />
  </Svg>
)

export default SvgComponent
