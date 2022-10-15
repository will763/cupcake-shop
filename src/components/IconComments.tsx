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
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h32v32H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.03125)" />
      </Pattern>
      <Image
        id="b"
        width={32}
        height={32}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYFJREFUWIXt171KHGEUxvGfLtEgLCSCCKZLlytIJ4KVTUBELMTCRkzqYBFSpHI3RRpbb8AbsEgKIUkTRBAUvADRtTBV0oR8oMXOktl3Z8eZWUcF94FTzPtxnv8578swQ193TEN4jwYuSopT1COvDtVLNA6jlgRQZuVhNGAgALhIoipRoX9X2skeTKZS8hrsIfG16NaP4NY7EKp/B/p34P7dgVAh4RFeYBRP8Q5/EtYVjVSAb3icsOblTQDs4lE0toAzfMLDpE1XaCovwJ7/lc9rb/nzsgHWNM8b5gLzBkaiue2UpD0dQUuz+B0sXorND+Btj+YnrURQxTImNM/5FR7EDH9hI9p4jM2oO58Vf0fU8Kb18CUnfWvj64KVr4t9lFYLJPmQUtkYDlL2tmlQe6uzaj9l7hzTOMyabFT+DjzLkLdbJzo0gn85zH+ikrG4JIhEbeUA+JrRPA5xeBVABTNYwSo+djH/i8WcADCu+YbdCSc6fgxieoLhYOwHvhcA6KpLeaZcKanvdKUAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
)

export default SvgComponent
