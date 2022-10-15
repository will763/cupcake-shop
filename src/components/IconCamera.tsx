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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCBELJSF80wZcAAACdElEQVRYw+1WPUsjURQ9L2wSQY0oIQqKRhS0FaK9ICh+dNpoabDxR2gtttFGEaNYxtrGj0oxYBqtjAhCUPwIKhGMifds8TZMFJI3+WB3Cw8MwzDnnnvevfPuG+AH/zsodXXkygqZTNI2np7IUIisra3cADc27Cf+BllfN+mr4qt3uaBeXwG3uzz76TTo8SjHx0chhqO4gM9XfnJAx/p8xRi/9Eq9Xqj5eaCvD/l9U5Ukz2ns7FDSaev57Q2IxcBQSDkeH0F2dpJ3d2X3uWzc3pJ+P8jd3b+fPIdIRJHJJNDYaL+mJBCNAnt74M2NLmt7OzAyAgQCgFL2tZJJlGRYjo8p/f0FrcnAAOXkpBTJEgxsbVFcLmN9xOUit7erbGB/n+J0WkmmpsijI0oqRUmlyMNDyuSk9d7ppBwcVMlAJkP29OjuK0WurhbmhkLWl9Lbq2MrNhCJWKJzc2b+7KzFN+8wGwbyBCUeN/MvLy1+MGhiG0YxAFxd6dW0tEB1dZn53d2U5ma9PeNxE9uGgdwYrakxc3PIcfNGcNkG2Nqq74kE8PJiTv78DCQSOqatrXIDanAQAJQjkwHCYbOBzU3lyGbzY4sv0Ij7e0p9PQBQGhrIi4vC3PNzisejuR4P5eGhCruApCwtWYabmvSky2YtQjZLhsOkdaZQlpftSNuchCLk9PSXyonXSxka0pfX+7WqMzM6pmoGSPLzk1xYoBT+SaG43eTioubagyLf30v77bq+BtbWvhzH6OiAGh4GgkHA77evlU4rSjQKFQjYD6omTk9Bjo3Zb0O1MTr6p3cTE5RYzM7pVTkyGcrZGWV8/N9U/Qff8BscPMEepJudRgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0xN1QxMTozNzozMyswMDowMNXy2TQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMTdUMTE6Mzc6MzMrMDA6MDCkr2GIAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA4LTE3VDExOjM3OjMzKzAwOjAw87pAVwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
)

export default SvgComponent
