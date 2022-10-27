import {
  useContext,
  useState,
  useEffect,
  useTransition,
  createContext,
} from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../config";


const DataContext = createContext();

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
