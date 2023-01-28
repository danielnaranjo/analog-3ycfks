import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    <h1>Vite + Angular</h1>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

    <p>
      Go to 
      <a href="/"
        >Home</a
      > page
    </p>
  `,
  styles: [``],
})
export default class ProductComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
