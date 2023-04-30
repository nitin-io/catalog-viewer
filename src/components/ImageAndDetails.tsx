import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { PauseCircleFilled } from "@mui/icons-material";

interface Props {
  title: string;
  content: string;
  imageURL: string;
}

const ImageAndDetails: React.FC<Props> = ({ title, content, imageURL }) => {
  const [slideShow, setSlideShow] = useState<boolean>(false);

  return (
    <>
      <Grid item md={8}>
        <Grid item className="image-container">
          <img src={imageURL} />
        </Grid>
        <NavigationBar />
      </Grid>
      <Grid item md={4}>
        <Grid item className="detail-container">
          <h1>{title}</h1>
          <p>{content}</p>
        </Grid>
        <Grid
          item
          md={12}
          justifyContent="center"
          alignItems="center"
          className="play-btn-container"
        >
          <Typography align="center">
            {slideShow ? (
              <PauseCircleFilled
                sx={{ fontSize: 60, color: "#25BEDA" }}
                onClick={() => setSlideShow(!slideShow)}
              />
            ) : (
              <PlayCircleIcon
                sx={{ fontSize: 60, color: "#25BEDA" }}
                onClick={() => setSlideShow(!slideShow)}
              />
            )}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageAndDetails;
