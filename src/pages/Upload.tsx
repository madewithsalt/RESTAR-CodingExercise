import React from "react";

import { useLocalStorage } from "../hooks/useDataLoader";
import PropertyDataManager from "../modules/PropertyDataManager";

function Upload() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const {
      data,
      get, 
      set
    } = useLocalStorage({ name: "properties" });

  React.useEffect(() => {
    if (data) {
      setLoading(false);
      console.log(data);
    } else {
        get();
    }

    return () => {};
  }, [data, get]);

  return loading ? (
    <div>LOADING!</div>
  ) : (
    <div>
        <h1>Upload File</h1>
        <PropertyDataManager onFileUpload={set} />
        {data ? <div>{JSON.stringify(data)}</div> : null}
    </div>
  );
}

export default Upload;
