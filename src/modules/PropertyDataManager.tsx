import React from "react";
import CSVUploader from "../components/CSVUploader";


export interface PropertyDataManagerProps {
    onFileUpload: () => void;
}

export const PropertyDataManager:React.FC<PropertyDataManagerProps> = ({
    onFileUpload
}) => {

    const handleFileUploaded = React.useCallback(() => {
        // process file data and then send to uploader to save
    }, [onFileUpload])

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