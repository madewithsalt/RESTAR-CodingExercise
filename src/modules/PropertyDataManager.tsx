import React from "react";
import CSVUploader from "../components/CSVUploader";

import { formatPropertyData } from "../helpers/formatPropertyData";
import { JPPropertyDataObject, PropertyInformation } from "../types/api";

export interface PropertyDataManagerProps {
    onFileUpload: (data: PropertyInformation[]) => void;
}

export const PropertyDataManager:React.FC<PropertyDataManagerProps> = ({
    onFileUpload
}) => {
    const handleFileUploaded = React.useCallback((data: JPPropertyDataObject[]) => {
        // process file data and then send to uploader to save
        onFileUpload(formatPropertyData(data));
    }, []);

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