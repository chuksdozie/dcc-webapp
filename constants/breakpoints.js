const breakpoints = {
  mobile: "576px",
  tablet: "830px",
  laptop: "992px",
  desktop: "1200px",
  xl: "1800px"

};

const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
  xl: `(max-width: ${breakpoints.xl})`,
};

export default device;
