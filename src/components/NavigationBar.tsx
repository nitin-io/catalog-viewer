import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Grid, Typography } from "@mui/material";
import data from "../assets/data.js";
import { useCatalogContext } from "./CatalogContext.js";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { PauseCircleFilled } from "@mui/icons-material";

interface Post {
  title: string;
  content: string;
  imageURL: string;
}

const NavigationBar: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { setActiveCatalog } = useCatalogContext();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setPosts(data);
  }, []);

  const handleNext = () => {
    let poppedItem = posts.pop() as Post;
    posts.unshift(poppedItem);
    setActiveCatalog(posts[Math.floor(posts.length / 2)]);
  };

  const handlePrev = () => {
    let shiftedItem = posts.shift() as Post;
    posts.push(shiftedItem);
    setActiveCatalog(posts[Math.floor(posts.length / 2)]);
  };

  useEffect(() => {
    setActiveCatalog(posts[Math.floor(posts.length / 2)]);
  }, [posts]);

  useEffect(() => {
    let interval: NodeJS.Timeout | unknown = null;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
        console.log("playing");
      }, 3000);
    } else {
      clearInterval(interval as NodeJS.Timeout);
    }
    return () => {
      clearInterval(interval as NodeJS.Timeout);
    };
  }, [isPlaying]);

  return (
    <>
      <Grid item md={8} xs={12}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          className="navigation-bar"
          id="navigation"
        >
          <PlayArrowIcon
            style={{ transform: "rotate(180deg)" }}
            onClick={handlePrev}
            className="navigation-btn"
          />
          {posts?.map((item) => {
            return (
              <Grid
                item
                md={2}
                xs={1}
                style={{
                  margin: "0 0.45rem",
                  backgroundImage: `url(  ${item.imageURL})`,
                }}
                onClick={() => {
                  setActiveCatalog(item);
                }}
                className="nav-btn"
              ></Grid>
            );
          })}
          <PlayArrowIcon onClick={handleNext} className="navigation-btn" />
        </Grid>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        justifyContent="center"
        alignItems="center"
        className="play-btn-container"
      >
        <Typography align="center">
          {isPlaying ? (
            <PauseCircleFilled
              sx={{ fontSize: 60, color: "#25BEDA" }}
              onClick={() => setIsPlaying(!isPlaying)}
            />
          ) : (
            <PlayCircleIcon
              sx={{ fontSize: 60, color: "#25BEDA" }}
              onClick={() => setIsPlaying(!isPlaying)}
            />
          )}
        </Typography>
      </Grid>
    </>
  );
};

export default NavigationBar;
