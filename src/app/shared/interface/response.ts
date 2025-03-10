export interface TableData {
  identifier: string;
  columns: any[];
  dataSource: InventoryData[] | CustomersData[];
}
export interface InventoryData {
  partNumber: string;
  name: string;
  total: number;
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
