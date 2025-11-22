import { Component } from '@angular/core';
import { PRODUCT } from '../../../product-configurations/product-selection';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  product = PRODUCT;
}