import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-datagrid',
  imports: [TableModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss',
})
export class DatagridComponent {
  loading = false;
  customers = [];
}
