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
    height={30}
    viewBox='0 0 30 40'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h39v35H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.01563 0 0 .01741 0 -.057)" />
      </Pattern>
      <Image
        id="b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default SvgComponent
