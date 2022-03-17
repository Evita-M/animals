import styled from "@emotion/styled";
import { colors, borderRadius } from "../../styled-components/core/style";

const pickColor = (color) => {
  return color === "red" ? colors.red : colors.green;
};

const SName = styled.h2({
  textTransform: "uppercase",
  fontSize: "16px",
  letterSpacing: "2px",
  color: colors.brown,
  marginBottom: "15px",
  position: "relative",
  paddingBottom: "10px",
  display: "block",
  "&:before": {
    content: `""`,
    position: "absolute",
    width: "20px",
    height: "2px",
    bottom: "0",
    left: "50%",
    background: colors.orange,
    marginLeft: "-10px",
  },
});

const SImgWrapper = styled.div({
  border: "2px solid white",
  borderRadius: borderRadius.lg,
  overflow: "hidden",
  position: "relative",
  backgroundColor: colors.beige,
  "&::before": {
    content: `""`,
    display: "block",
    paddingTop: "60%",
  },
});

const SImg = styled.img({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transition: "transform 0.3s",
  objectFit: "cover",
});

const SCard = styled.article({
  background: colors.beige,
  position: "relative",
  borderRadius: borderRadius.lg,
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  boxShadow: "0px 0px 3px 0.1px #4c4c4c",
  textAlign: "center",
  color: colors.brown,
});

const SFavoriteBtn = styled.button(
  {
    backgroundColor: colors.white,
    display: "flex",
    justifyContent: "center",
    outline: "none",
    alignItems: "center",
    position: "absolute",
    border: "none",
    cursor: "pointer",
    top: 0,
    zIndex: 2,
    right: 0,
    borderRadius: `0 0 0 ${borderRadius.lg}`,
    width: "40px",
    height: "40px",
    "& > svg": {
      position: "relative",
      width: "20px",
      transition: "fill 0.3s, transform 0.3s",
    },
    "&:hover > svg": {
      transform: "scale(1.2)",
    },
  },
  (props) => ({
    "& > svg": {
      fill: pickColor(props.variant),
    },
  })
);

export { SCard, SName, SImgWrapper, SImg, SFavoriteBtn };
