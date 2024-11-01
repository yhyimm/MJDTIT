import { Component, Input } from '@angular/core';
import { ProductCardsModul } from '../../../core/moduls/ProductCardsModul';
import { HomeComponent } from '../../components/home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']  // Corrected this line
})
export class ProductCardComponent {
  @Input() product!: ProductCardsModul;

  constructor() { }

}
