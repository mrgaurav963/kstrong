import { Component, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { StoreService } from './service/store.service';
import { ProductData } from '../shared/interface/response';
import { CategoriesComponent } from './categories/categories.component';
import { BreadcrumbComponent } from '../standalone/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-store',
  imports: [
    CommonModule,
    DataViewModule,
    SelectButton,
    ItemComponent,
    CategoriesComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {
  options = ['list', 'grid'];
  //layout: string = 'grid';
  layout = 'grid' as 'list' | 'grid';
  products!: ProductData[];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getData().subscribe((data: ProductData[]) => {
      this.products = data;
    });
  }

  changeLayout(e: any) {
    this.layout = e.value;
  }
}
