import { Component, Input } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { AddChildComponent } from '../add-child/add-child.component';
@Component({
  selector: 'an-animals-tree',
  template: `
  <li *ngIf="root">
    <div (click)="root.expand()">
        {{root.name}}
    </div>
    <ul *ngIf="root.expanded && root.children">
        <li *ngFor="let childAnimal of root.children">
            <an-animals-tree
                [root]="childAnimal">
            </an-animals-tree>
        </li>
        <an-add-child [parent]="root"></an-add-child>
    </ul>
  </li>
  `,
  directives: [AnimalsTreeComponent,AddChildComponent]
})
export class AnimalsTreeComponent {
    @Input() root: AnimalTreeNode;
}