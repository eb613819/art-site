import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { MOCK_PRODUCTS } from '../../data/mock-products';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: Product[] = MOCK_PRODUCTS;
}
