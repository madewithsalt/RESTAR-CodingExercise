import * as React from "react";
import useMountedState from "../hooks/useMountedState";

export const defaultFetchOptions = {
  method: "GET",
};

export type useDataLoaderProps = (config: { url: string }) => {
  error: Error | null;
  loading: boolean | null;
  data: unknown;
  handleRequest(fetchOptions?: unknown): Promise<unknown>;
};

/**
 * @param url - the url to request.
 */
export const useDataLoader: useDataLoaderProps = ({ url }) => {
  const isMounted = useMountedState();
  const [data, updateData] = React.useState<unknown>();
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState<boolean | null>(null);

  /**
   * @param fetchOptions - anything allowed via [fetch params](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
   *
   */
  const handleRequest = React.useCallback(
    (fetchOptions = {}) => {
      setLoading(true);

      return fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        ...fetchOptions,
      })
        .then((response) => {
          console.log(response);
          return response.text();
        })
        .then((data) => {
          if (!isMounted()) {
            return;
          }

          updateData(data);
          setLoading(false);
          setError(null);

          return data;
        })
        .catch((error) => {
          if (!isMounted()) {
            return;
          }

          updateData(null);
          setError(error);
          setLoading(false);

          return error;
        });
    },
    [isMounted, url]
  );

  return {
    data,
    error,
    loading,
    handleRequest,
  };
};

/**
 * Use Local Storage
 * A simple getter-setter for specified LocalStorage data
 * This is very loosely typed and unopinonated
 * for demonstration purposes only
 */
export interface useLocalStorageProps {
  data: unknown,
  get: () => void;
  set: (update: unknown) => void;
}

export const useLocalStorage:({ name }: { name: string }) => useLocalStorageProps = ({ name }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const localData = localStorage.getItem(name);

    if (localData) {
      setData(JSON.parse(localData));
    }
  }, [name]);

  const get = React.useCallback(() => {
    return data;
  }, [data]);

  const set = React.useCallback((update: unknown) => {
    setData(data);
    localStorage.setItem(name, JSON.stringify([
      ...data,
      update
    ]))
  }, [data, name]);

  return {
    data,
    get,
    set
  }
}

