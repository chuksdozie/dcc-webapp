type ColorShades = {
  [key: string]: string;
};

const colors: ColorShades = {
  gray1: "#F2F4F7",
  gray2: "#D7D7D7",
  gray3: "#667085",
  gray4: "#d9d9d9",
  gray5: "#F1F2F4",
  gray25: "#FCFCFD",
  gray50: "#F9FAFB",
  gray100: "#F2F4F7",
  gray200: "#EAECF0",
  gray300: "#D0D5DD",
  gray301: "#D0D5DD",
  gray400: "#98A2B3",
  gray500: "#667085",
  gray600: "#475467",
  gray700: "#344054",
  gray800: "#1D2939",
  gray900: "#101828",
  warning50: "#FFFAEB",
  warning100: "#FEF0C7",
  warning200: "#FEDF89",
  warning300: "#FEC84B",
  warning400: "#FDB022",
  warning500: "#F79009",
  warning600: "#DC6803",
  warning700: "#B54708",
  warning800: "#93370D",
  warning900: "#7A2E0E",
  warning950: "#4E1D09",
  success25: "#F6FEF9",
  success50: "#ECFDF3",
  success100: "#D1FADF",
  success200: "#A6F4C5",
  success300: "#6CE9A6",
  success400: "#32D583",
  success500: "#12B76A",
  success600: "#039855",
  success700: "#027A48",
  success800: "#05603A",
  success900: "#054F31",
  success950: "#053321",
  blueGray25: "#FDFDFD",
  blueGray50: "#FCFCFD",
  blueGray100: "#EAECF5",
  blueGray200: "#C8CCE5",
  blueGray300: "#9EA5D1",
  blueGray400: "#717BBC",
  blueGray500: "#4E5BA6",
  blueGray600: "#3E4784",
  blueGray700: "#363F72",
  blueGray800: "#293056",
  blueGray900: "#101323",
  blueGray950: "#0D0F1C",
  white: "#FFFFFF",
  black: "#000000",
  dark: "#101828",
  border: "#D0D5DD",
  primary25: "#F5F9FF",
  primary50: "#EAF3FF",
  primary100: "#BAD8FF",
  primary200: "#8BBDFF",
  primary300: "#E0EAFF",
  primary600: "#1A73E8",
  primary700: "#0047A4",
  twitter: "#1DA1F2",
  facebook: "#1877F2",
  linkedin: "#0A66c2",
};

export const profileColors: string[] = [
  "#a6691e",
  "#8b8f14",
  "#15734a",
  "#154773",
  "#7a5199",
  "#944d93",
  "#944d62",
  "#A4BCFD",
  "#FDA29B",
  "#FEB273",
  "#FEA3B4",
  "#5CA2FF",
];

const scheduleColors: string[] = [
  "#F79009",
  "#1570EF",
  "#12B76A",
  "#FF69B4",
  "#8E4ECF",
];

let usedColors: string[] = [];

export const scheduleEventColors = () => {
  const availableColors = scheduleColors.filter(
    (color) => !usedColors.includes(color)
  );

  let selectedColor: string;

  if (availableColors.length === 0) {
    usedColors = [];
    selectedColor =
      scheduleColors[Math.floor(Math.random() * scheduleColors.length)];
  } else {
    selectedColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];
  }

  usedColors.push(selectedColor);

  return selectedColor;
};

// export const scheduleEventColors = () => {
//   return scheduleColors[Math.floor(Math.random() * scheduleColors.length)];
// };

export const randomColorGetter = () => {
  return profileColors[Math.floor(Math.random() * profileColors.length)];
};

export default colors;
