export const INVENTORY_DATAGRID = {
  caption: 'Inventory',
  keyExpr: 'partNumber',
  globalFilterFields: ['partNumber', 'name', 'total', 'asOf'],
  columns: [
    {
      field: 'partNumber',
      header: 'Part Number',
      customExportHeader: 'Part Number',
    },
    { field: 'name', header: 'Name' },
    { field: 'total', header: 'Total', cellTemplate: 'inventoryTemplate' },
    { field: 'asOf', header: 'As Of' },
  ],
  datagridFeatures: {
    paginator: true,
    showCurrentPageReport: true,
    exportEnabled: true,
    searchEnabled: true,
    sortEnabled: true,
    addNewEnabled: false,
  },
};

export const LOCATION_INVENTORY = {
  caption: 'Locations Inventory',
  keyExpr: '',
  globalFilterFields: [],
  columns: [
    {
      field: 'adamsWarehouse',
      header: 'Adams Warehouse',
    },
    { field: 'belmont', header: 'Belmont' },
    { field: 'broadview', header: 'Broadview' },
    { field: 'newJersey', header: 'New Jersey' },
    { field: 'ohioTrainor', header: 'Ohio Trainor' },
    { field: 'trainor', header: 'Trainor' },
    { field: 'unspecifiedSite', header: 'Unspecified Site' },
    { field: 'vegas', header: 'Vegas' },
  ],
  datagridFeatures: {
    paginator: false,
    showCurrentPageReport: false,
    exportEnabled: false,
    searchEnabled: false,
    sortEnabled: false,
    addNewEnabled: false,
  },
};

export const CUSTOMERS_DATAGRID = {
  caption: 'Customers',
  keyExpr: 'account',
  globalFilterFields: ['account', 'name', 'address', 'pricingTier', 'status'],
  columns: [
    {
      field: 'account',
      header: 'Account #',
      customExportHeader: 'Account #',
    },
    { field: 'name', header: 'Name' },
    { field: 'address', header: 'Address' },
    { field: 'pricingTier', header: 'Pricing Tier' },
    { field: 'status', header: 'Status' },
  ],
  datagridFeatures: {
    paginator: true,
    showCurrentPageReport: true,
    exportEnabled: true,
    searchEnabled: true,
    sortEnabled: true,
    addNewEnabled: true,
  },
};
