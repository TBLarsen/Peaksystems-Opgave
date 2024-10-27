import { Routes } from '@angular/router';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
{ path: '', component: DisplayPageComponent },
{ path: 'add-product', component: AddProductComponent } 
];
