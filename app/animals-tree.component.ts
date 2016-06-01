import { Component, Input } from '@angular/core';
import { AnimalTreeNode } from './animal-tree-node';
@Component({
  selector: 'an-animals-tree',
  template: `
  <ul class="animals">
    <li>
        {{rootAnimal.name}}
        <ul>
            <li *ngFor="let childAnimal of rootAnimal.children">
                <an-animals-tree [rootAnimal]="childAnimal"></an-animals-tree>
            </li>
        </ul>
    </li>
  </ul>
  `
})
export class AnimalsTreeComponent {
    @Input()
    rootAnimal: AnimalTreeNode;
}