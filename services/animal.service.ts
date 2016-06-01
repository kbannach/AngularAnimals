import { Injectable } from '@angular/core';
import { AnimalTreeNode } from '../app/animal-tree-node';
@Injectable()
export class AnimalService {
    mock = new AnimalTreeNode("mock",[]);
    getRootAnimalPromise(){
        return Promise.resolve(this.mock);
    }
}