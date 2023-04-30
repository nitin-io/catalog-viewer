import ImageAndDetails from "./components/ImageAndDetails";
import { Grid } from "@mui/material";

import "./App.css";
import { useCatalogContext } from "./components/CatalogContext";

const App: React.FC = () => {
  const { activeCatalog } = useCatalogContext();

  return (
    <>
      <Grid container style={{ marginTop: "20px" }}>
        <ImageAndDetails
          title={activeCatalog?.title}
          content={activeCatalog?.content}
          imageURL={activeCatalog?.imageURL}
        />
      </Grid>
    </>
  );
};

export default App;
