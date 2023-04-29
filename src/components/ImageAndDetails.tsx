import React from "react";
import { Grid } from "@mui/material";

interface Props {
  title: string;
  content: string;
  imageURL: string;
}

const ImageAndDetails: React.FC<Props> = ({ title, content, imageURL }) => {
  return (
    <>
      <Grid item md={8}>
        <div className="image-container">
          <img src={imageURL} />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className="detail-container">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </Grid>
    </>
  );
};

export default ImageAndDetails;
