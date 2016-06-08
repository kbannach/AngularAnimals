import { Component } from '@angular/core';
import { AnimalsTreeComponent } from '../animals-tree-component/animals-tree.component';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { AnimalService } from '../animal-service/animal.service';
import { OnInit } from '@angular/core';
import { AddChildComponent } from '../add-child-component/add-child.component';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <an-add-child></an-add-child>
  </div>
  <ul class="animals">
    <an-animals-tree 
      [root]="root">
     </an-animals-tree>
  </ul>
  `,
  directives: [AnimalsTreeComponent, AddChildComponent],
  providers: [AnimalService]
})
export class AppComponent implements OnInit {
  root: AnimalTreeNode;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.observable$.subscribe(ret => {
      this.root = ret;
    });
    this.animalService.getNodes();
  }
}