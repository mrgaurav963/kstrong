import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { StoreService } from './service/store.service';
import { ProductData } from '../shared/interface/response';
import { CategoriesComponent } from './categories/categories.component';
import { BreadcrumbComponent } from '../standalone/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'app-store',
  imports: [
    CommonModule,
    DataViewModule,
    SelectButton,
    ItemComponent,
    CategoriesComponent,
    BreadcrumbComponent,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    IconField,
    InputIcon,
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {
  options = ['list', 'grid'];
  layout: 'list' | 'grid' = 'grid';
  products!: ProductData[];
  rawProducts!: ProductData[];
  loading: boolean = true;
  inputControl: FormControl = new FormControl();
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProductsList();
    this.detectSearchQuery();
  }

  getProductsList() {
    this.storeService.getData().subscribe((data: ProductData[]) => {
      this.products = this.rawProducts = data;
      setTimeout(() => {
        this.loading = false;
      }, 400);
    });
  }

  detectSearchQuery() {
    this.inputControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query) => {
        this.productSearch(query);
      });
  }

  productSearch(query: string) {
    this.products = this.rawProducts;
    this.products = this.products.filter(
      (i) =>
        i.partNumber.toLowerCase().includes(query.toLowerCase()) ||
        i.productName.toLowerCase().includes(query.toLowerCase())
    );
  }
}
