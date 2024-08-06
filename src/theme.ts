import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      "50": "#E7EFFD",
      "100": "#D4E2FC",
      "200": "#B2CBFA",
      "300": "#87AEF7",
      "400": "#4D88F4",
      "500": "#0C4AC0",
      "600": "#0B42A8",
      "700": "#093890",
      "800": "#083382",
      "900": "#06245B",
    },
    gray: {
      "50": "#FAFAFA",
      "100": "#EDEDED",
      "200": "#D4D4D4",
      "300": "#B5B5B5",
      "400": "#8F8F8F",
      "500": "#4D4D4D",
      "600": "#454545",
      "700": "#383838",
      "800": "#303030",
      "900": "#1A1A1A",
    },
    green: {
      "50": "#ECF8F1",
      "100": "#D9F2E3",
      "200": "#B3E5C7",
      "300": "#8DD8AB",
      "400": "#67CB8F",
      "500": "#41BE73",
      "600": "#34985C",
      "700": "#277245",
      "800": "#1A4C2E",
      "900": "#0D2617",
    },
    orange: {
      "50": "#FFEFE5",
      "100": "#FFDFCC",
      "200": "#FFBE99",
      "300": "#FF9E66",
      "400": "#FF7E33",
      "500": "#FF5E00",
      "600": "#CC4B00",
      "700": "#993800",
      "800": "#662500",
      "900": "#331300",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
    Icon: {
      defaultProps: {
        color: "gray.500",
      },
    },
  },
});

export default theme;
