import { Component, Input } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { NgForm } from '@angular/common';
import { AnimalService } from '../animal-service/animal.service';
import { OnInit } from '@angular/core';
@Component({
    selector: 'an-add-child',
    templateUrl: 'app/add-child-component/add-child.component.html',
    providers: [AnimalService]
})
export class AddChildComponent {
    adding = false;
    @Input() parent: AnimalTreeNode;
    nodesList: AnimalTreeNode[];

    constructor(private animalService: AnimalService) { }

    getAllNodes() {
        this.animalService.getRootAnimalPromise()
            .then(ret => {
                this.nodesList = this.getNodes(ret);
            });
    }

    private getNodes(node: AnimalTreeNode): AnimalTreeNode[] {
        let ret = node.children;
        if (ret && ret.length > 0) {
            ret.forEach(n => {
                ret = ret.concat(this.getNodes(n));
            });
        }
        return ret;
    }

    ngOnInit() {
        this.getAllNodes();
    }

    addClick() {
        this.adding = true;
    }

    performAdd() {

        this.adding = false;
    }
}