const imagesStyles = {
  pic: {
    width: 240,
    height: 170,
    marginBottom: 20,
    marginRight: 24,
    "@media all and (min-width:471px) and (max-width: 760px)": {
      width: 200,
    },
    "@media all and (max-width:470px)": {
      width: "80%",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "@media all and (max-width:470px)": {
      width: "100%",
    },
  },
};
export default imagesStyles;
