import { Component, Input } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductCardsModul } from '../../../core/moduls/ProductCardsModul';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: ProductCardsModul[] = [];
  private basePath = 'assets/products/';

  constructor() {}

  ngOnInit(): void {
    this.loadProductImages();
  }

  loadProductImages() {
    const maxImages = 50; // Arbitrary high number
    for (let i = 1; i <= maxImages; i++) {
      const imagePath = `${this.basePath}${i}.png`;
      
      this.imageExists(imagePath).then((exists) => {
        if (exists) {
          this.products.push({ image: imagePath });
        }
      });
    }
  }

  imageExists(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }
}


