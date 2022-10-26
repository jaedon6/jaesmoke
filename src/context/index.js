import React, { useContext, useState, useEffect, useTransition } from "react";
import { collection, onSnapshot } from "firebase/firestore";

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
      await startTransition(async () => {
        await onSnapshot(collection(db, "works"), async (snapshot) => {
          await snapshot.forEach(doc => {
            workList.push(doc);
          });

          setWorks(workList);
        });
      });
      setLoading(false);
    }

    unsuscribe();
  }, [works]);

  return (
    <React.Suspense fallback={<div>loading</div>}>
      <DataContext.Provider value={{ works }}>
        { !loading && children }
      </DataContext.Provider>
    </React.Suspense>
  )
}
