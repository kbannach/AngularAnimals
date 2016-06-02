import { Injectable } from '@angular/core';
import { AnimalTreeNode } from '../animal-tree-node/animal-tree-node';
@Injectable()
export class AnimalService {
    private waz = new AnimalTreeNode("wąż", []);
    private kura = new AnimalTreeNode("kura", []);
    private pies = new AnimalTreeNode("pies", []);
    private czlowiek = new AnimalTreeNode("człowiek", []);
    private gady = new AnimalTreeNode("Gady", [this.waz]);
    private ptaki = new AnimalTreeNode("Ptaki", [this.kura]);
    private ssaki = new AnimalTreeNode("Ssaki", [this.czlowiek, this.pies]);
    private root = new AnimalTreeNode("Zwierzęta", [this.ssaki, this.ptaki, this.gady]);

    getRootAnimalPromise() {
        return Promise.resolve(this.root);
    }
}