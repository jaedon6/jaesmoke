import React, { useContext, useState, useEffect, useTransition } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../config";


const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let workList = [];

    async function unsuscribe() {
      startTransition(async () => {
        const snapshot = await getDocs(collection(db, "works"));
        snapshot.forEach(doc => workList.push(doc));
        await setWorks(workList);
      });
      setLoading(false);
    }
    unsuscribe();
  }, []);

  return (
    <DataContext.Provider value={{ works, isPending }}>
      { !loading && children }
    </DataContext.Provider>
  )
}
