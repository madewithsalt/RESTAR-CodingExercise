import React from "react";
import CSVUploader from "../components/CSVUploader";

import { useLocalStorage } from "../hooks/useDataLoader";
import { formatPropertyData } from "../helpers/formatPropertyData";
import { JPPropertyDataObject, PROPERTY_LOCALSTORAGE, PropertyInformation } from "../types/api";

const LOCAL_STORAGE_KEY:PROPERTY_LOCALSTORAGE = "properties"; 

export interface PropertyDataManagerProps {
    onFileUpload: (data: PropertyInformation[]) => void;
}

export const PropertyDataManager:React.FC<PropertyDataManagerProps> = () => {
    const {
        set
    } = useLocalStorage({ name: LOCAL_STORAGE_KEY });

    const handleFileUploaded = React.useCallback((data: JPPropertyDataObject[]) => {
        // process file data and then send to uploader to save
        set(
            formatPropertyData(data)
        );
    }, [set]);

    return (
        <div className="module--property-data-manager">
            <div>
                <h3>Choose CSV File</h3>
                <CSVUploader onFileUpload={handleFileUploaded} />
            </div>
        </div>
    )
}

export default PropertyDataManager;