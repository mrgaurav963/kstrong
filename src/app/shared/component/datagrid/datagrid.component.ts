import { Component, Input, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableData } from '../../interface/response';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-datagrid',
  imports: [TableModule, ButtonModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss',
})
export class DatagridComponent {
  @Input() tableData: TableData = {
    identifier: '',
    columns: [],
    dataSource: [],
  };

  loading = false;
}
