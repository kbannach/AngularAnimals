import { Component } from '@angular/core';
import { AnimalsTreeComponent } from '../animals-tree-component/animals-tree.component';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { AnimalService } from '../animal-service/animal.service';
import { OnInit } from '@angular/core';
import { AddChildComponent } from '../add-child-component/add-child.component';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
  selector: 'my-app',
  template: `
  <h1>Animals Tree</h1>
  <ul class="animals">
    <an-animals-tree 
      [root]="root">
     </an-animals-tree>
  </ul>
  <div>
    <label>test</label>
    <an-add-child></an-add-child>
  </div>
  `,
  directives: [/*ROUTER_DIRECTIVES,*/AnimalsTreeComponent,AddChildComponent],
  providers: [/*ROUTER_PROVIDERS,*/AnimalService]
})
export class AppComponent implements OnInit {
  root: AnimalTreeNode;
  
  constructor(private animalService: AnimalService){ }
  
  getRootAnimal() {
    this.animalService.getRootAnimalPromise().then(ret => this.root = ret);
  }
 
  ngOnInit() {
    this.getRootAnimal();
  }
}