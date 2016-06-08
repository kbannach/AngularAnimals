import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimalsTreeComponent } from '../animals-tree-component/animals-tree.component';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { AnimalService } from '../animal-service/animal.service';
import { AddChildComponent } from '../add-child-component/add-child.component';
import { Subscription } from 'rxjs/Subscription';

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
export class AppComponent implements OnInit, OnDestroy {
  root: AnimalTreeNode;
  subscribcion: Subscription;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.subscribcion = this.animalService.observable$.subscribe(ret => {
      this.root = ret;
    });
    this.animalService.getNodes();
  }

  ngOnDestroy() {
    this.subscribcion.unsubscribe();
  }
}