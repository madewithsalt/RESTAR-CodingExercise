import * as React from "react";
import { PropertyInformation, PROPERTY_LOCALSTORAGE } from "../types/api";

const LOCAL_STORAGE_KEY:PROPERTY_LOCALSTORAGE = "properties"; 


/**
 * Use Local Storage
 * A simple getter-setter for specified LocalStorage data
 * This is very loosely typed and unopinonated
 * for demonstration purposes only
 */
export interface useLocalStorageProps {
  data: PropertyInformation[],
  get: () => void;
  set: (update: PropertyInformation[]) => void;
}

export const useLocalStorage:({ name }: { name: string }) => useLocalStorageProps = ({ name }) => {
  const [data, setData] = React.useState<PropertyInformation[]>([]);

  React.useEffect(() => {
    const localData = localStorage.getItem(name);

    if (localData) {
      setData(JSON.parse(localData));
    }
  }, [name]);

  // retrieve data from localStorage if it exists,
  // using the designated LOCAL_STORAGE_KEY
  const get = React.useCallback(() => {
    const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedJSON = rawData ? JSON.parse(rawData) : [];
    setData(parsedJSON);
    return ;
  }, []);

  const set = React.useCallback((update: PropertyInformation[]) => {
    setData(update);
    localStorage.setItem(name, JSON.stringify(update))
  }, [name]);

  return {
    data,
    get,
    set
  }
}

