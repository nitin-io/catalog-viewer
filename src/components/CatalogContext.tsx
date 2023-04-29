import React, { createContext, useContext, useState } from "react";

interface Catalog {
  title: string;
  content: string;
  imageURL: string;
}

const activeCatalogContext = createContext({} as Catalog);

const ActiveCatalogProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeCatalog, setActiveCatalog] = useState<Catalog>({
    title: "",
    content: "",
    imageURL: "",
  });
  return (
    <>
      <activeCatalogContext.Provider
        value={{ activeCatalog, setActiveCatalog }}
      >
        {children}
      </activeCatalogContext.Provider>
    </>
  );
};

export const useCatalogContext = useContext(activeCatalogContext);

export default ActiveCatalogProvider;
