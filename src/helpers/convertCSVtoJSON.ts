import { PropertyInformation } from "../types/api";
import csvtojson from "csvtojson";

export const convertCSVtoJSON: (stream: string, callback: (result: unknown[]) => void) => PropertyInformation[] = (
  stream,
  callback
) => {
  const result: PropertyInformation[] = [];

  csvtojson().fromString(stream)
    .then((jsonResult) => callback(jsonResult));
  console.log();

  return result;
};
