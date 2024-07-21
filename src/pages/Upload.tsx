import React from "react";

// import { useGetData } from "../hooks/useDataLoader";


function Upload() {
    const [loading, setLoading] = React.useState<boolean>(true);
    const data = false;
    // const {
    //     data
    //   } = useGetData();

      React.useEffect(() => {
       if(data) {
        setLoading(false);
        console.log(data);
       }

       return () => {};
      }, [])

      return loading ? (
        <div>
            LOADING!
        </div>
      ) : (
        <div>
            {data ? (
                <div>
                    {JSON.stringify(data)}
                </div>
            ) : null }
        </div>
      );
  }
  
  export default Upload;
  