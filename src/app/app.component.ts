import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GridModule, GridDataResult } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { process, State } from '@progress/kendo-data-query';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    GridModule,
    InputsModule,
    DialogModule,
    ButtonsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kendo-bundle-size';

  // Grid data
  private products: Product[] = [];
  public gridData: GridDataResult = {
    data: [],
    total: 0
  };
  public searchText = '';

  // Dialog state
  public dialogOpened = false;
  public selectedProduct: Product | null = null;

  // Grid state
  public state: State = {
    skip: 0,
    take: 10,
    sort: [{ field: 'id', dir: 'asc' }]
  };

  ngOnInit() {
    // Generate some test data
    this.generateProducts();
    this.loadGridData();
  }

  private generateProducts() {
    const categories = ['Electronics', 'Furniture', 'Clothing', 'Food', 'Books'];

    for (let i = 1; i <= 100; i++) {
      this.products.push({
        id: i,
        name: `Product ${i}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        price: parseFloat((Math.random() * 1000).toFixed(2)),
        inStock: Math.random() > 0.3
      });
    }
  }

  public loadGridData() {
    const filteredData = this.searchText ?
      this.products.filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.category.toLowerCase().includes(this.searchText.toLowerCase())
      ) :
      this.products;

    this.gridData = process(filteredData, this.state);
  }

  public onSearch() {
    this.state.skip = 0;
    this.loadGridData();
  }

  public onStateChange(state: State) {
    this.state = state;
    this.loadGridData();
  }

  public openDialog(product: Product) {
    this.selectedProduct = product;
    this.dialogOpened = true;
  }

  public closeDialog() {
    this.dialogOpened = false;
    this.selectedProduct = null;
  }
}
