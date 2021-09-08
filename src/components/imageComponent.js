import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/imageStyles.js";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles);
const ImageComponent = (props) => {
  const classes = useStyles();
  const { src } = props;
  return (
    <div className={classes.container}>
      <img className={classes.pic} src={src} alt="" />
    </div>
  );
};
export default ImageComponent;
