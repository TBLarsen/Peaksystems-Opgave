import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DisplayPageComponent } from './components/display-page/display-page.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayPageComponent, AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
