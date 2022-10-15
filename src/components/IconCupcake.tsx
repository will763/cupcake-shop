import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={30}
    height={33}
    viewBox='0 0 35 30'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 .402h40v32.195H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.03125 0 0 .03883 0 -.121)" />
      </Pattern>
      <Image
        id="b"
        width={32}
        height={32}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default SvgComponent
