import { Component, Input } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { AddChildComponent } from '../add-child-component/add-child.component';
@Component({
  selector: 'an-animals-tree',
  templateUrl: 'app/animals-tree-component/animals-tree.component.html',
  directives: [AnimalsTreeComponent,AddChildComponent]
})
export class AnimalsTreeComponent {
    @Input() root: AnimalTreeNode;
}