import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-display-page',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './display-page.component.html',
    styleUrl: './display-page.component.css',
})
export class DisplayPageComponent {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    searchTerm: string = '';
    currentSortColumn: string = '';
    isAscending: boolean = true;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getProducts().subscribe(
            (data: Product[]) => {
                this.products = data;
                console.log(this.products);
                this.filteredProducts = data;
            }
        );
    }
    
    deleteProduct(id: string) {
        this.productService.DeleteProduct(id).subscribe(
            {
                next: (response) => {
                    console.log(response);
                    this.products = this.products.filter((product) => product.id !== id);
                    this.filterProducts();
                },
                error: (error) => {
                    console.error(error);
                }
            }
        )
    }

    filterProducts() {
        const search = this.searchTerm.toLowerCase();
        this.filteredProducts = this.products.filter(
            (product) =>
                product.id.toLowerCase().includes(search) ||
                product.volume.toString().includes(search) ||
                product.location.toLowerCase().includes(search)
        );
    }


    sortProducts(column: keyof Product) {
        if (this.currentSortColumn === column) {
            this.isAscending = !this.isAscending;
        } else {
            this.currentSortColumn = column;
            this.isAscending = true;
        }

        this.filteredProducts.sort((a, b) => {
            const valueA = a[column];
            const valueB = b[column];

            if (valueA < valueB) return this.isAscending ? -1 : 1;
            if (valueA > valueB) return this.isAscending ? 1 : -1;
            return 0;
        });
    }



}
