import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
@Component({
  selector: 'app-item',
  imports: [CommonModule, ButtonModule, TruncatePipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data!: any;
  @Input() layout!: any;
}
