import { Component, inject } from '@angular/core';
import { DatagridComponent } from '../shared/component/datagrid/datagrid.component';
import {
  InventoryData,
  LocationInventoryData,
  TableData,
} from '../shared/interface/response';
import {
  INVENTORY_DATAGRID,
  LOCATION_INVENTORY,
} from '../shared/constants/datagrid-config';
import { BreadcrumbComponent } from '../standalone/breadcrumb/breadcrumb.component';
import { InventoryService } from './services/inventory.service';
import { filter } from 'rxjs';
import { CategoriesComponent } from '../store/categories/categories.component';

@Component({
  selector: 'app-inventory',
  imports: [DatagridComponent, BreadcrumbComponent, CategoriesComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  inventoryService = inject(InventoryService);
  tableData: TableData = {
    identifier: 'inventoryDatagrid',
    config: INVENTORY_DATAGRID,
    dataSource: [],
  };
  innerTableData: TableData = {
    identifier: 'innerTableData',
    config: LOCATION_INVENTORY,
    dataSource: [],
  };
  rawLocationInventoryData!: LocationInventoryData[];

  ngOnInit(): void {
    this.selectInventoryData();
    this.selectLocationInventoryData();
  }

  selectInventoryData() {
    this.inventoryService
      .getInventoryData()
      .subscribe((data: InventoryData[]) => {
        this.tableData.dataSource = data;
      });
  }

  selectLocationInventoryData() {
    this.inventoryService
      .getLocationInventoryData()
      .pipe(filter((data) => !!data))
      .subscribe((data: LocationInventoryData[]) => {
        this.rawLocationInventoryData = data;
      });
  }

  handleDataRequest(req: any) {
    this.innerTableData.dataSource = this.rawLocationInventoryData.filter(
      (i) => i.sku === req
    );
  }
}
