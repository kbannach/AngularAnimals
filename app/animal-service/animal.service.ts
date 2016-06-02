import { Injectable } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
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

    getRootAnimalPromise() {
        return Promise.resolve(this.root);
    }

    getById(id: number) {
        let ret: AnimalTreeNode;
        this.getRootAnimalPromise()
            .then(root => ret = this.findById(id, root));
        return ret;
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