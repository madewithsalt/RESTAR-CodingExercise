
export type PROPERTY_LOCALSTORAGE = "properties";

export interface PropertyInformation {
  id: string;
  full_address: string;
  prefecture: string;
  city: string;
  town: string;
  chome: string;
  banchi: string;

  go: string;
  building: string;
  price: string;
  nearest_station: string;
  property_type: string;
  land_area: string;
}
