import { Component } from '@angular/core';
import { DatagridComponent } from '../shared/component/datagrid/datagrid.component';
import { CoreService } from '../core/core.service';
import { InventoryData, TableData } from '../shared/interface/response';
import { INVENTORY_DATAGRID } from '../shared/constants/datagrid-config';
import { BreadcrumbComponent } from '../standalone/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-inventory',
  imports: [DatagridComponent, BreadcrumbComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  tableData: TableData = {
    identifier: 'inventoryDatagrid',
    columns: INVENTORY_DATAGRID,
    dataSource: [],
  };

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService.getData().subscribe((data: InventoryData[]) => {
      this.tableData.dataSource = data;
    });
  }
}
