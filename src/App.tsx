import { useState } from "react";
import ImageAndDetails from "./components/ImageAndDetails";
import { Grid, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

interface Post {
  title: string;
  content: string;
  imageURL: string;
}

const App: React.FC = () => {
  const [activeCatalog, setActiveCatalog] = useCatalogContext();

  return (
    <>
      <Grid container>
        <ImageAndDetails
          title={activeCatalog.title}
          content={activeCatalog.content}
          imageURL={activeCatalog.imageURL}
        />
        <NavigationBar />
        <Grid item md={4} justifyContent="center" alignItems="center">
          <Typography align="center">
            <PlayCircleIcon sx={{ fontSize: 60, color: "#25BEDA" }} />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
