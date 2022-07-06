import React, { createContext, useState, useEffect, useMemo } from "react";
import { api } from "@/services/api";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [brandsList, setBrandsList] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  async function getBrands() {
    const { data } = await api.get("brands");
    console.log(data);
    setBrandsList(data);
  }

  const value = useMemo(
    () => ({
      brandsList,
    }),
    [brandsList]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
