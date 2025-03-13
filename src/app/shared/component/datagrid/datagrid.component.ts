import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
  Renderer2,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableData } from '../../interface/response';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { AddCustomerComponent } from '../../../customers/components/add-customer/add-customer.component';

@Component({
  selector: 'app-datagrid',
  imports: [
    TableModule,
    ButtonModule,
    DialogModule,
    IconField,
    InputIcon,
    TooltipModule,
    BadgeModule,
    FormsModule,
    CommonModule,
    AddCustomerComponent,
  ],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss',
})
export class DatagridComponent {
  @Output() requestData = new EventEmitter<void>();
  @Input() tableData: TableData = {
    identifier: '',
    config: {},
    dataSource: [],
  };
  @Input() innerTableData: TableData = {
    identifier: '',
    config: {},
    dataSource: [],
  };

  el = inject(ElementRef);
  renderer = inject(Renderer2);
  globalQuery!: string;
  dialogVisible!: boolean;

  loading = false;

  getInnerTableData(data: any) {
    this.requestData.emit(data.partNumber);
    this.innerTableData.identifier = 'innerTable' + data.partNumber;
    return this.innerTableData;
  }

  test(data: any) {
    console.log(data);
  }
}
