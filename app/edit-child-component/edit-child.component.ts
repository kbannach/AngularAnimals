import { Component, Input } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { NgForm } from '@angular/common';

@Component({
    selector: 'an-edit-child',
    templateUrl: 'app/edit-child-component/edit-child.component.html'
})
export class EditChildComponent {
    editing = false;
    @Input() model: AnimalTreeNode;

    editClick() {
        this.editing = true;
    }

    onSubmit() {
        console.log("name: " + this.model.name);
        for (let c of this.model.children) {
            console.log("child: " + c.name);
        }
        this.editing = false;
    }
}