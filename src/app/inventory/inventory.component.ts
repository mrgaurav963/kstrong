import { Component } from '@angular/core';
import { DatagridComponent } from '../shared/component/datagrid/datagrid.component';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-inventory',
  imports: [DatagridComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  users: any[] = [];

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService.getData().subscribe((data) => {
      this.users = data;
    });
    console.log(this.users);
  }
}
