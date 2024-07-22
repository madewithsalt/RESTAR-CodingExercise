import React from "react";

export interface CSVUploaderProps {

}

export const CSVUploader = () => {
    const [file, setFile] = React.useState<unknown>(null);

    const onSubmit = React.useCallback(() => {
        debugger;
        console.log(arguments);
        setFile()
    }, [setFile]);

    return (
        <div className="component--csv-uploader">
            <form onSubmit={onSubmit}>
                <input type="file" name="property-csv" id="field--property-csv" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CSVUploader;