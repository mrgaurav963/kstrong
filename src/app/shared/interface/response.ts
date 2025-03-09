export interface TableData {
  identifier: string;
  columns: any[];
  dataSource: InventoryData[];
}
export interface InventoryData {
  partNumber: string;
  name: string;
  total: number;
  asOf: string;
}
