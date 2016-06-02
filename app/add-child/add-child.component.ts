import { Component, Input } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { NgForm } from '@angular/common';
@Component({
  selector: 'an-add-child',
  template: `
  <li *ngIf="parent">
    <div *ngIf="adding">
        <form>
            <label> Nazwa: </label>
            <input type="text" required>
            <button type="submit" (click)="performAdd()">Dodaj</button>
        </form>
    </div>
    <div *ngIf="!adding" (click)="addClick()">
        +
    </div>
  </li>
  <div *ngIf=!parent">
    <form>
        <label> Nazwa: </label>
        <input type="text" required>
        <button type="submit" (click)="performAdd()">Dodaj</button>
    </form>
  </div>
  `
})
export class AddChildComponent {
    adding = false;
    @Input() parent: AnimalTreeNode;
    
    addClick(){
        this.adding = true;
    }
    
    performAdd(){
        
        this.adding = false;
    }
}