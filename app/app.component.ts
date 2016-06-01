import { Component } from '@angular/core';
import { AnimalsTreeComponent } from './animals-tree.component';
import { AnimalTreeNode } from './animal-tree-node';
import { AnimalService } from '../services/animal.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Animals Tree</h1>
  <an-animals-tree [rootAnimal]="animal"></an-animals-tree>
  `,
  directives: [AnimalsTreeComponent],
  providers: [AnimalService]
})
export class AppComponent implements OnInit {
  animal: AnimalTreeNode;
  constructor(private animalService: AnimalService){ }
  getRootAnimal() {
    this.animalService.getRootAnimalPromise().then(ret => this.animal = ret);
  }
  ngOnInit() {
    this.getRootAnimal();
  }
}