import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
    imports: [CommonModule, FormsModule],
    standalone: true,
})
export class AddProductComponent {
    product = { id: '', volume: 0, location: '' };

    constructor(private productService: ProductService, private router: Router) { }

    onSubmit() {
        this.productService.AddProduct(this.product).subscribe(
            {
                next: (response) => {
                    console.log(response);
                    this.router.navigate(['/']);
                },
                error: (error) => {
                    console.error('Error adding product:', error);
                }
            }
            ,

        );
    }
}
