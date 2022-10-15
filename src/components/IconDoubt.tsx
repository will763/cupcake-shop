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
    height={37}
    viewBox='0 0 38 25'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 .964h40v35.122H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.03125 0 0 .03559 0 -.07)" />
      </Pattern>
      <Image
        id="b"
        width={32}
        height={32}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhlJREFUWIXtlr1rVEEUxc99u0G08KOx3MWghdnUNjE2FgqCYMB/YO3Ej0a0XTCCqQRtNWJh4yOVWIgIkVSmzq5oQhbboKCIEZK551js24+si2SeJlrsaeZxh+F3Z+658wYYaqh/LAOAJ1ffnwhMHlM2RgIugALI9mitUYC3Y73xLOadb+tb34pl86LQgLH66OXoYgIAuwgHBaNQCSGZBYAEACg7vkvw3vhYNwHCYuAS3poXKrefjdqd9Egi+bjLFiPgIFvlT4D4ncML1VpabmQ20szcsTpDUo2Aw9VanZUg7thraekdANycWt24caEZAODe81IjBs4sgWJWgqia35pqTppWikE2QmENAGoXGyOf1vdtG072JhBpOAFvHAVQWAubfhoAPv/YeyYG3j6BzIR53W7V+y+OLl07tzLuTB7GwCnr80COVju45/srAAgqvnbhcAy8XYJOAnn6vJZWNrIuioZvMWHeS+by2Y8nJbNARsP9FxNGwimDmxYo5YJvNWEeuAA6JtxtMg98cBdE3u1OS1gwywMnrVsCCSJhMXAKkGlBQbngFNT9F7g1YuF5j73nzql3SwBVXVZvPRZ2HC4KSwQudV5E/bp+fvWKZA8Gw7VMJdPrh0pP09R80PoYFQcFRZto76QH3hTsbnOzPDs/b+FPwb9NgMKpLlzLjmT624G/s+NtJeC0DwS+OG3m6/7yjoCHGuq/0U/RRoFNeBo2KQAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
)

export default SvgComponent
