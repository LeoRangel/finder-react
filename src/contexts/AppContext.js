import React, { createContext, useState, useEffect, useMemo } from "react";
import { api } from "@/services/api";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [brandsList, setBrandsList] = useState([]);
  const [cartypeList, setCartypeList] = useState([]);

  async function getBrands() {
    const { data } = await api.get("brands");
    setBrandsList(data);
  }

  async function getCartype() {
    const { data } = await api.get("cartype");
    setCartypeList(data);
  }

  useEffect(() => {
    getBrands();
    getCartype();
  }, []);

  const value = useMemo(
    () => ({
      brandsList,
      cartypeList,
    }),
    [brandsList, cartypeList]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
