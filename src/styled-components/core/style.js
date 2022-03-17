import styled from "@emotion/styled";

const colors = {
  green: "#56721b",
  greenDark: "#4b5c09",
  greenBg: "#95b317",
  greenBgDark: "#7a9700",
  white: "#ffffff",
  beige: "#e8ded1",
  brown: "#3a0510",
  orange: "#e9750f",
  orangeDark: "#cc5500",
  red: "#da012d",
};

const borderRadius = {
  default: "4px",
  lg: "10px",
};

const btnStyles = {
  display: "inline-block",
  outline: "none",
  letterSpacing: "0.8px",
  cursor: "pointer",
  padding: "8px 12px",
  fontFamily: "Amaranth, sans-serif",
  color: colors.white,
  border: "2px solid rgba(255, 255, 255, .3)",
  transition: "background 0.3s",
  borderRadius: borderRadius.default,
};

const SGlobal = styled.div({
  fontFamily: "Amaranth, sans-serif",
  color: colors.white,
  height: "100vh",
  fontSize: "14px",
  letterSpacing: "0.7px",
  "@media(min-width: 480px)": {
    overflow: "hidden",
  },
});

const SButton = styled.button(() => ({
  ...btnStyles,
  background: colors.greenBg,
  textTransform: "uppercase",
  "&:disabled": {
    background: "grey",
  },
  "&:hover": {
    background: colors.greenBgDark,
  },
}));

const SLink = styled.a(() => ({
  ...btnStyles,
  textDecoration: "none",
  maxWidth: "150px",
  margin: "0 auto",
  background: colors.orange,
  "&:hover": {
    background: colors.orangeDark,
  },
}));

const SInput = styled.input({
  outline: "none",
  letterSpacing: "0.8px",
  border: "2px solid transparent",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "4px",
  fontFamily: "Amaranth, sans-serif",
  padding: "6px 10px",
  display: "inline-block",
  transition: "background 0.3s, border-color 0.3s",
  "&:focus": {
    backgroundColor: colors.white,
    borderColor: colors.greenBg,
  },
});

const SContainer = styled.div({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
});

const SHeader = styled.header({
  backgroundColor: colors.greenDark,
  fontSize: "14px",
  padding: "5px 0",
  "& > div": {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    "@media(min-width: 750px)": {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },
  },
});

const SForm = styled.form({
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(6.5px)",
  padding: "15px",
  WebkitBackdropFilter: "blur(6.5px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  "& > div": {
    margin: "0 0 -10px -10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      minWidth: "200px",
      margin: "0 0 10px 10px",
    },
  },
});

const SAnimalsSection = styled.section({
  position: "relative",
  borderRadius: "10px",
  "&::after": {
    bottom: "-20px",
    content: `""`,
    position: "absolute",
    left: 0,
    right: "10px",
    height: "70px",
    background: colors.greenBg,
    background: `linear-gradient(
      0deg,
      rgba(149, 179, 23, 1) 0%,
      rgba(149, 179, 23, 0.9) 40%,
      rgba(149, 179, 23, 0.2) 70%,
      rgba(232, 222, 209, 0) 100%
    )`,
  },
  "& > div": {
    overflow: "auto",
    height: "80vh",
  },
  "@media(min-width: 480px)": {
    "&:after": {
      right: "10px",
    },
  },
});

const SList = styled.div({
  display: "grid",
  padding: "10px 10px 30px",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "20px",
  justifyContent: "center",
});

export {
  SButton,
  SLink,
  SInput,
  SContainer,
  colors,
  borderRadius,
  SHeader,
  SForm,
  SList,
  SAnimalsSection,
  SGlobal,
};
