import * as React from "react";
import useMountedState from "../hooks/useMountedState";
import { each } from "lodash";

export const defaultFetchOptions = {
  method: "GET",
};

export type useDataLoaderFunc = (config: { url: string }) => {
  error: Error | null;
  loading: boolean | null;
  data: unknown;
  handleRequest(fetchOptions?: unknown): Promise<unknown>;
};

/**
 * @param url - the url to request.
 */
export const useDataLoader: useDataLoaderFunc = ({ url }) => {
  const isMounted = useMountedState();
  const [data, updateData] = React.useState<unknown>();
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState<boolean | null>(null);

  /**
   * @param fetchOptions - unknownthing allowed via [fetch params](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
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

export const useDataSender: ({ url }: { url: string }) => {
  data: unknown;
  error: Error | null;
  saving: boolean | null;
  handleSend(
    values: { [name: string]: unknown },
    fetchOptions?: unknown
  ): Promise<unknown>;
} = ({ url }) => {
  const { data, error, loading, handleRequest } = useDataLoader({ url });

  const handleSend = React.useCallback(
    (values: unknown) => {
      // GET only in DEMO MODE.
      return handleRequest();

      // REAL LOGIC BELOW:
      // this is the example of a POST with a body included.
      // when your slim server accepts a POST to an endpoint
      // you can use this to submit the form data from a view.
      const formData = new FormData();

      each(values, (val, key) => formData.append(key, val));

      return handleRequest({
        method: "POST",
        body: formData,
      });
    },
    [handleRequest]
  );

  return {
    data,
    error,
    saving: loading,
    handleSend,
  };
};
