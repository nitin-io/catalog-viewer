import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Grid } from "@mui/material";
import data from "../assets/data.js";
import { useCatalogContext } from "./CatalogContext.js";

interface Post {
  title: string;
  content: string;
  imageURL: string;
}

const NavigationBar: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { setActiveCatalog } = useCatalogContext();

  const imageStyling = {
    width: "150%",
    height: "5rem",
    margin: "0 0.4rem",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    border: "none",
    borderRadius: "0.5rem",
  };

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

  return (
    <>
      <Grid item>
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
                  ...imageStyling,
                  backgroundImage: `url(  ${item.imageURL})`,
                }}
                onClick={() => {
                  setActiveCatalog(item);
                }}
                className="btn"
              ></Grid>
            );
          })}
          <PlayArrowIcon onClick={handleNext} className="navigation-btn" />
        </Grid>
      </Grid>
    </>
  );
};

export default NavigationBar;
