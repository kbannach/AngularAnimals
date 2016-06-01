import { Component } from '@angular/core';
import { AnAnimalsTreeComponent } from './animals-tree.component';
@Component({
  selector: 'my-app',
  template: `
  <h1>Animals Tree</h1>
  <an-animals-tree [rootAnimal]="TODO"></an-animals-tree>
  `
})
export class AppComponent { }