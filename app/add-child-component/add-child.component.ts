import { Component, Input, OnInit } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { NgForm } from '@angular/common';
import { AnimalService } from '../animal-service/animal.service';

@Component({
    selector: 'an-add-child',
    templateUrl: 'app/add-child-component/add-child.component.html'
})
export class AddChildComponent implements OnInit {
    adding = false;
    @Input() parent: AnimalTreeNode;
    select: AnimalTreeNode;
    nameInput = "";
    nodesList: AnimalTreeNode[];

    constructor(private animalService: AnimalService) { }

    private getNodes(node: AnimalTreeNode): AnimalTreeNode[] {
        let ret: AnimalTreeNode[] = [];
        if (node) {
            ret.push(node);
            if (node.children.length > 0) {
                node.children.forEach(n => {
                    ret = ret.concat(this.getNodes(n));
                });
            }
        }
        return ret;
    }

    ngOnInit() {
        this.animalService.observable$.subscribe(ret => {
            this.nodesList = this.getNodes(ret);
            if (!this.select) {
                this.select = ret;
            }
        });
        this.animalService.getNodes();
        /*this.animalService.getRootAnimalPromise()
            .then(ret => {
                this.select = ret;
                this.nodesList = this.getNodes(ret);
            });*/
    }

    onChange() { }

    addClick() {
        this.adding = true;
    }

    onSubmit() {
        let node = this.animalService.getById(this.select.id);
        if (node) {
            node.children.push(new AnimalTreeNode(Math.random(), this.nameInput, []));
        }
        this.animalService.getNodes();
        //this.animalService.addItemToNodeById(new AnimalTreeNode(Math.random(), this.nameInput, []), this.select.id);
        /*this.animalService.getRootAnimalPromise()
            .then(ret => {
                ret.children.forEach(c => {
                    console.log("c: " + c.name);
                });
            });*/
        this.adding = false;
    }
}