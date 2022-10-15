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
    <Path fill="url(#a)" d="M0 0h40v33H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.03125 0 0 .03788 0 -.106)" />
      </Pattern>
      <Image
        id="b"
        width={32}
        height={32}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABRNJREFUWEfFlmlslEUYx3/PzOyWcoSeBDV8wCIeiQe0lN22Kko/IBBixDMEIV4haiJEYrzlgwlo4gckxlsgYIzhCBoFhCIGMdBSyxaiCBQQAwSBtgIC4r47Y6a7laVlu11jwiTvvpvN7Dy/+T+ncJmXXGb75AxwmqZSsGM01BioVrhCDT+A2wx2tRA5lMulsgIcobGvQlUZqNVQq3AjNCiNQwMq9U4adf5jP1AHrg70OqHiZE9A3QA2stEMoaDSIGNDuFqBiMaFFWCSBv808J3G1Qm2zh8ehlqSz+3AgBSIB4oDW8BuSEKdbxDuCNKBugG0ENutYbg36G+pINC4eoWr80YT9G/O52ylxtZqXK3fJ7g61WGgbz2cuxlsCsiNBkIXgGS3ELkuG0CbhkKFLDawIp/4pgQyTJAOFwiu2kB+BhecAzaD25B0AXtBbgM7GZgOtAvRoh4B9hJrNVBkCQryMAsUbrzGFae5oMP3PcRAZyz4dyvwNdhZIP577wHAFYbggIKClCs6YyAXAH/ZdoiXgWnrFUALzSeSN1ZFmsT+DADtgntH47YZEA2jgKfAFaRlQ6cSbRAfljOAwRQL8RYFhekKaNwmjTwEdlIYxgpojV0DeV/AXytAatKywPO0gb0m5YI2IVqcLQiPaygJcb4EwnsUFKUBHIkTlOejVxpctEsdWA+JqaBi4AanKfHfAPIISi16dxeAVzWcUbi3MgThbJD+YOdkAGgVoiXZFDimodQDJNC/aCi+oIC6U5F4ScPYDAANwIupFOyMgVaww1Mu6BXA7xoGBdhBfZBd6QAhXIXAAg3RDAA7QR4DW5+mQCvItWBP+EeoLs2mwGENV4aQIWC3KrjqggLuEQU3aph1aQAWgN0BfJgGcAiC0aAPA0eF6BVZALY3aqQcJBrCvq1gVFoQNsUJJvRF79C40i5BeAj0SAjWgbslDaAB7AyQJpCYEBmRrRIuNzBZwcMaV6PgiYvTkLlh7McWed109AKnNXwF7jmQWcl3R1dMxYC8m3LJImClEPVl+d/VrRntJ/a097OCZQb3qcCqiyuh/cmgpvdjZGP6QY5tleAWAjdcDOAmAQ8AU0BmCpH5WVzw4zCN9vl/Joy92iH1GjfUd0UFz4fRS4T4owbuU1CWmgdaQJZBsBDUVHDzOtoF7IOgCtSvQJ7PBqF6X48AyYkitkbDOI2ba3A7BZYauF/j2gU+81mSIQuOgX0QKAb5HNwU4CZwLwBrhehdXYeTS05EB9g+RiHfatxZQZUrbFkIOaGx3ytcOEs3/BuoAVsKeh/YZrBhkCohsrVXAH7TQZoXaew0BbHz/BEdwMCluiM4k6NYlna8HPQ0CLakFFgsRP080G1lnAkPsqNQk/B1wE9HX4J6PI/EaoUrzwLQAGYixD8BNxHYA0GFUHM6JwC/+Td2lhmCLT7nBVbmw4wE7gMDd2dQYAXYmSDvAROSA4m7VYjuupRx/1svpuKmCg2rFZQaaOwD91rcRIV7Q0O/lEtOgbwMiW9ArQJ7fXIQSYwTqnx/yLiyAvh/Hic2HOxaA0MV7qQgzxrseoObo5BAw2tgvdxvAgXgDoIbL0R+7sl4rxToPOAIjSX5qPcV7p5UDDQYeEWSldDnvU83v91XxenCaD8DZl29UiD9lFM0TlPIPI0b3KUXHAc7GyqXCNJZi/9/AH/iUZr7DSR4xuCeFFxCIx9BMF+InMpqscuGnBXI1UC2/Zcd4B9ETP4weSQ50gAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
)

export default SvgComponent
