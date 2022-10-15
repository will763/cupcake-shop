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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFMSURBVFiF7ZexasMwEIa/S03GPoJjyJLOpmMh9Dmy9zX0KH4Cv0Eh0NFzpyxtHyFZSqBcB0nEdV1i15a1+IcD+SzuP939khCqStOAPaDAvu1/H7sWa0FkJH4gIg/APXALZM6diYgZyNGMdQQqVX3xE5ZAiS3TlFYCyxvAAE8DV/kf3AECcHAZvQJpaBECqeNS4LAA1i6jUlU/Qi/bcZTuc534MgBftXkFNvO3ETjbYnkuSWiBqhYjEHeKJdheALwzzoq7IANWzQSioN6CKBWAy8Fghm65HlvTeN7od8GvBERkIyKFs00IXxM/WgBsa75tIJ/xvrZz4BMrSD8O4fu7ArMIZxEyi3BiBBdhFwQV4bUWTCHCfhWIIcKTSyTtmvEI8FynBKiAR2AnInApYSisgJ0bVwA5cGb6p9kZyH1PcuAZ+3AMTXx0XLmq8g3IuBhLVMzSQAAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
)

export default SvgComponent
