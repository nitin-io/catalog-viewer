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
  const [activeCatalog, setActiveCatalog] = useCatalogContext();

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

  return (
    <>
      <Grid item md={8} justifyContent={"center"} alignItems={"center"}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          className="navigation-bar"
        >
          <PlayArrowIcon style={{ transform: "rotate(180deg)" }} />
          {posts?.map((item) => {
            return (
              <Grid
                item
                md={2}
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
          <PlayArrowIcon />
        </Grid>
      </Grid>
    </>
  );
};

export default NavigationBar;
