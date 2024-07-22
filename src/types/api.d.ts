
export type PROPERTY_LOCALSTORAGE = "properties";

export interface PropertyInformation {
  id?: string;
  full_address?: string;
  prefecture?: string;
  city?: string;
  town?: string;
  chome?: string;
  banchi?: string;

  go?: string;
  building?: string;
  price?: string;
  nearest_station?: string;
  property_type?: string;
  land_area?: string;
}


export interface JPPropertyDataObject {
  [name: string]: string;
  丁目?: string;
  価格?: string;
  号?: string;
  市区町村?: string;
  建物名?: string;
  敷地面積?: string;
  最寄駅?: string;
  物件タイプ?: string;
  町名?: string;
  番地?: string;
  都道府県?: string;
}
