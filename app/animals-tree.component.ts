import { Component } from '@angular/core';
import { AnimalTreeNode } from './animal-tree-node';
@Component({
  selector: 'an-animals-tree',
  template: `
  <ul class="animals">
    <li>
        {{rootAnimal.name}}
        <ul>
            <li *ngFor="let childAnimal for rootAnimal.children">
                <an-animals-tree [rootAnimal]="childAnimal"></an-animals-tree>
            </li>
        </ul>
    </li>
  </ul>
  `
})
export class AnAnimalsTreeComponent {
    rootAnimal: AnimalTreeNode;
}