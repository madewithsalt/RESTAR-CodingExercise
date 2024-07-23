import React from "react";

import { useLocalStorage } from "../hooks/useDataLoader";
import PropertyDataManager from "../modules/PropertyDataManager";

function Upload() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { data, get, set } = useLocalStorage({ name: "properties" });

  React.useEffect(() => {
    if (data) {
      setLoading(false);
    } else {
      get();
    }

    return () => {};
  }, [data, get]);

  return loading ? (
    <div>LOADING!</div>
  ) : (
    <div>
      <div className="file-uploader"></div>
      <h1>Property Data Viewer</h1>
      <PropertyDataManager onFileUpload={set} />

      <div className="data-load-status">
        {data && data.length ? (
          <>
            <hr />
            <p>{`${data.length} entries stored.`}</p>
            {data.length != 0 ? (
              <>
                <p>
                  <a href="/property">View All Entries (JSON)</a>
                </p>
                <hr />
                <div>
                  <h4>View Specific Property By Id</h4>
                  <a href="/property?id=100">
                    View Specific Entry Example (100)
                  </a>
                </div>
              </>
            ) : null}
          </>
        ) : (
          <div>
            <p>{`No Data Loaded Yet. Please upload a valid CSV file.`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
