import { Component, inject } from '@angular/core';
import { CustomersData, TableData } from '../shared/interface/response';
import { CUSTOMERS_DATAGRID } from '../shared/constants/datagrid-config';
import { DatagridComponent } from '../shared/component/datagrid/datagrid.component';
import { BreadcrumbComponent } from '../standalone/breadcrumb/breadcrumb.component';
import { CustomersService } from './service/customers.service';

@Component({
  selector: 'app-customers',
  imports: [DatagridComponent, BreadcrumbComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  customerService = inject(CustomersService);
  tableData: TableData = {
    identifier: 'customersDatagrid',
    config: CUSTOMERS_DATAGRID,
    dataSource: [],
  };
  ngOnInit(): void {
    this.customerService.getData().subscribe((data: CustomersData[]) => {
      this.tableData.dataSource = data;
    });
  }
}
