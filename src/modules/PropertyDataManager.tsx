import React from "react";
import CSVUploader from "../components/CSVUploader";

import { useLocalStorage } from "../hooks/useDataLoader";
import { PROPERTY_LOCALSTORAGE } from "../types/api";

const LOCAL_STORAGE_KEY:PROPERTY_LOCALSTORAGE = "properties"; 

export interface PropertyDataManagerProps {
}

export const PropertyDataManager:React.FC<PropertyDataManagerProps> = () => {
    const {
        data,
        get,
        set
    } = useLocalStorage({ name: LOCAL_STORAGE_KEY });

    const handleFileUploaded = React.useCallback((data: unknown[]) => {
        // process file data and then send to uploader to save
        console.log("Ready to format?", data);
        set(data);
    }, [set]);

    return (
        <div className="module--property-data-manager">
            <div>
                <h3>Upload Form Field</h3>
                <CSVUploader onFileUpload={handleFileUploaded} />
            </div>
            <div>List of Uploads</div>
            <div>Button: Clear Uploads</div>
        </div>
    )
}

export default PropertyDataManager;