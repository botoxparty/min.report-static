const sizes = {
  narrow: 360,
  small: 480,
  medium: 640,
  tablet: 769,
  large: 960,
  wide: 1200,
  ewide: 1360,
  uwide: 1440,
  suwide: 1600,
  jumbo: 1920,
  massive: 2560,
};

const customMediaQuery = (width: number, minMax: string) =>
  `@media (${minMax}-width: ${width}px)`;

const media = {
  custom: customMediaQuery,
  min: {
    narrow: customMediaQuery(sizes.narrow, 'min'),
    small: customMediaQuery(sizes.small, 'min'),
    medium: customMediaQuery(sizes.medium, 'min'),
    tablet: customMediaQuery(sizes.tablet, 'min'),
    large: customMediaQuery(sizes.large, 'min'),
    wide: customMediaQuery(sizes.wide, 'min'),
    ewide: customMediaQuery(sizes.ewide, 'min'),
    suwide: customMediaQuery(sizes.suwide, 'min'),
    jumbo: customMediaQuery(sizes.jumbo, 'min'),
    massive: customMediaQuery(sizes.massive, 'min'),
  },
  max: {
    narrow: customMediaQuery(sizes.narrow, 'max'),
    small: customMediaQuery(sizes.small, 'max'),
    medium: customMediaQuery(sizes.medium, 'max'),
    tablet: customMediaQuery(sizes.tablet, 'max'),
    large: customMediaQuery(sizes.large, 'max'),
    wide: customMediaQuery(sizes.wide, 'max'),
    ewide: customMediaQuery(sizes.ewide, 'max'),
    suwide: customMediaQuery(sizes.suwide, 'max'),
    jumbo: customMediaQuery(sizes.jumbo, 'max'),
    massive: customMediaQuery(sizes.massive, 'max'),
  },
};

export default media;
