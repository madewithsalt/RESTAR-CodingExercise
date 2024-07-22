import React from "react";

import { convertCSVtoJSON } from "../helpers/convertCSVtoJSON";
import readFile from "../helpers/readFile";
import { JPPropertyDataObject } from "../types/api";

export interface CSVUploaderProps {
    onFileUpload: (data: JPPropertyDataObject[]) => void
}

export const CSVUploader:React.FC<CSVUploaderProps> = ({
    onFileUpload
}) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);
  const [data, setData] = React.useState<unknown>(null);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (loading) {
        return;
      }
      setError(null);
      setLoading(true);

      // ensure a file was uploaded before proceeding
      if (event?.target?.files && event.target.files[0]) {
        const file = event.target.files[0];

        // if file does not end in .csv, assume we cannot process it.
        if (file.name.indexOf(".csv") === -1) {
          setError("Must be a .csv file.");
          return;
        }

        console.log(file);

        readFile(file, (result: string) => {
          convertCSVtoJSON(result, (data: unknown[]) => {
            setData(data);
            setError(null);
            setLoading(false);

            onFileUpload(data as JPPropertyDataObject[]);
          });
        });
      }
    },
    [loading, onFileUpload]
  );

  return (
    <div className="component--csv-uploader">
      <div className="csv-input">
        {error ? (
            <p className="error-text">{`ERROR: ${error}`}</p>
        ) : null}
        <input
          type="file"
          name="property-csv"
          id="field--property-csv"
          onChange={onChange}
        />
      </div>
      {loading ? <div>LOADING ...</div> : null}
    </div>
  );
};

export default CSVUploader;
