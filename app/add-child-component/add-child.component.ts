import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { NgForm } from '@angular/common';
import { AnimalService } from '../animal-service/animal.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'an-add-child',
    templateUrl: 'app/add-child-component/add-child.component.html'
})
export class AddChildComponent implements OnInit, OnDestroy {
    adding = false;
    @Input() parent: AnimalTreeNode;
    select: AnimalTreeNode;
    nameInput = "";
    nodesList: AnimalTreeNode[];
    subscribcion: Subscription;

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
        this.subscribcion = this.animalService.observable$.subscribe(ret => {
            this.nodesList = this.getNodes(ret);
            if (!this.select) {
                this.select = ret;
            }
        });
        this.animalService.getNodes();
    }

    ngOnDestroy() {
        this.subscribcion.unsubscribe();
    }

    onChange() { }

    addClick() {
        this.adding = true;
    }

    onSubmit() {
        if (this.parent) {
            this.parent.children.push(new AnimalTreeNode(Math.random(), this.nameInput, []));
        } else {
            this.select.children.push(new AnimalTreeNode(Math.random(), this.nameInput, []));
        }
        this.animalService.getNodes();
        this.adding = false;
    }
}