export interface TableData {
  identifier: string;
  columns: any;
  dataSource: InventoryData[] | CustomersData[] | LocationInventoryData[];
  paginator: boolean;
  showCurrentPageReport: boolean;
  exportEnabled: boolean;
  searchEnabled: boolean;
  sortEnabled: boolean;
}
export interface InventoryData {
  partNumber: string;
  name: string;
  total: number;
  asOf: string;
}
export interface LocationInventoryData {
  sku: string;
  adamsWarehouse: string;
  belmont: string;
  broadview: string;
  newJersey: string;
  ohioTrainor: string;
  trainor: string;
  unspecifiedSite: string;
  vegas: string;
  asOf: string;
}
export interface CustomersData {
  account: string;
  name: string;
  address: number;
  pricingTier: string;
  status: string;
}

export interface ProductData {
  partNumber: string;
  productName: string;
  shortDescription: string;
  categories: string;
  price: number;
  image: string;
}
