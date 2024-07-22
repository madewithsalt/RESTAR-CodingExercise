/**
 * SEMI-FAKE API
 * 
 * This file demonstrates returning a parsed file "persisted"
 * through the client uploader, which in this demonstration sends the file 
 * to LocalStorage.
 * 
 * We then use the `id=<property_id>` search params to retrieve that
 * data from LocalStorage and serve it here as JSON data within the document body.
 * 
 * This is not a 100% accurate representation of API REST endpoint behavior,
 * but without a live backend, I hope this demonstrates my ability to separate
 * the logic in a rational way.
 * 
 */

import { PROPERTY_LOCALSTORAGE } from "./types/api";

const LOCAL_STORAGE_KEY:PROPERTY_LOCALSTORAGE = "properties"; 
const params = new URLSearchParams(location.search);

const DATA = localStorage.getItem(LOCAL_STORAGE_KEY);

console.log(DATA);

document.body.innerHTML = `
    {
        "test": "JSON"
    }
`;