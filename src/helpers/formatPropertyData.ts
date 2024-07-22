import { each } from "lodash";

import { PropertyInformation, JPPropertyDataObject  } from "../types/api";
import HEADERS from "../data/translations.json";

export const formatPropertyData: (
  propertyData: JPPropertyDataObject[]
) => PropertyInformation[] = (propertyData: JPPropertyDataObject[]) => {
  const result: PropertyInformation[] = [];
  const API_KEYS:{[name: string]: string } = HEADERS.jp_to_api;

  if (!propertyData.length) {
    return [];
  }

  each(propertyData, (entry, index) => {
    const formattedEntry:{
        [name: string]: string
    } = {};
    const keys = Object.keys(entry).map((key) => key.trim());

    // map api key names to japanese CSV key values
    each(keys, (key) => {
        const entryValue = entry[key];
        const apiKey = API_KEYS[key];

        formattedEntry[apiKey] = entryValue;
    });

    // generate the new object entry for the results list
    result.push({
        id: `${index}`,
        full_address: [
            `${formattedEntry.prefecture}`,
            `${formattedEntry.city}`,
            `${formattedEntry.chome}${HEADERS.jp.chome}-${formattedEntry.banchi}${HEADERS.jp.banchi}-${formattedEntry.go}${HEADERS.jp.go}`,
            `${formattedEntry.building}`
        ].join(' '),
        ...formattedEntry
    });
  });

  console.log(result);
  return result;
};
