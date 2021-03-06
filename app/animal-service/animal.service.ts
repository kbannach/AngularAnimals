import { Injectable } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable()
export class AnimalService {
    private waz = new AnimalTreeNode(8, "wąż", []);
    private kura = new AnimalTreeNode(7, "kura", []);
    private pies = new AnimalTreeNode(6, "pies", []);
    private czlowiek = new AnimalTreeNode(5, "człowiek", []);
    private gady = new AnimalTreeNode(4, "Gady", [this.waz]);
    private ptaki = new AnimalTreeNode(3, "Ptaki", [this.kura]);
    private ssaki = new AnimalTreeNode(2, "Ssaki", [this.czlowiek, this.pies]);
    private root = new AnimalTreeNode(1, "Zwierzęta", [this.ssaki, this.ptaki, this.gady]);

    observable$: Observable<AnimalTreeNode>;
    private observer: Observer<AnimalTreeNode>;

    constructor() {
        this.observable$ = new Observable(observer => this.observer = observer);
    }

    getNodes() {
        this.observer.next(this.root);
    }

    addItemToNodeById(toAdd: AnimalTreeNode, rootId: number) {
        let root = this.findById(rootId, this.root);
        root.children.push(toAdd);
        this.observer.next(this.root);
    }

    getById(id: number) {
        let ret: AnimalTreeNode;
        return this.findById(id, this.root);
    }

    removeNodeById(nodeId: number) {
        this.findAndRemoveParentByChildId(nodeId, this.root);
    }

    private findAndRemoveParentByChildId(id: number, child: AnimalTreeNode) {
        if (child.children.find(c => c.id === id)) {
            child.children = child.children.filter(c => c.id !== id);
        } else {
            child.children.forEach(c => {
                let ret = this.findAndRemoveParentByChildId(id, c);
                if (ret) {
                    return ret;
                }
            });
        }
    }

    private findById(id: number, child: AnimalTreeNode) {
        if (child.id === id) {
            return child;
        } else {
            child.children.forEach(c => {
                return this.findById(id, c);
            });
        }
    }
}