import { Component, inject } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule, RouterLink, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  route = inject(ActivatedRoute);
  coreService = inject(CoreService);
  items = [{ label: 'Home', icon: 'pi pi-home', route: '/' }];
  ngOnInit() {
    this.route.snapshot.url.forEach(
      (i) =>
        (this.items = [
          ...this.items,
          {
            label: this.coreService.toTitleCase(i.path),
            icon: '',
            route: '/' + i.path,
          },
        ])
    );
  }
}
