import { Component, Input } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { NgForm } from '@angular/common';
import { AnimalService } from '../animal-service/animal.service';

@Component({
    selector: 'an-edit-child',
    templateUrl: 'app/edit-child-component/edit-child.component.html'
})
export class EditChildComponent {
    editing = false;
    @Input() model: AnimalTreeNode;

    constructor(private animalService: AnimalService) { }

    editClick() {
        this.editing = true;
    }

    usun() {
        this.animalService.removeNodeById(this.model.id);
        this.animalService.getNodes();
    }

    onSubmit() {
        this.editing = false;
    }
}