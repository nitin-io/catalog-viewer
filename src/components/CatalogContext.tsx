import React, { createContext, useContext, useState } from "react";

interface Catalog {
  title: string;
  content: string;
  imageURL: string;
}

interface CatalogContextType {
  activeCatalog: Catalog;
  setActiveCatalog: React.Dispatch<React.SetStateAction<Catalog>>;
}

const activeCatalogContext = createContext<CatalogContextType>({
  activeCatalog: {
    title: "",
    content: "",
    imageURL: "",
  },
  setActiveCatalog: () => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const ActiveCatalogProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [activeCatalog, setActiveCatalog] = useState<Catalog>({
    title: "",
    content: "",
    imageURL: "",
  });

  const catalogContext = { activeCatalog, setActiveCatalog };

  return (
    <>
      <activeCatalogContext.Provider value={catalogContext}>
        {children}
      </activeCatalogContext.Provider>
    </>
  );
};

export const useCatalogContext = () => useContext(activeCatalogContext);
