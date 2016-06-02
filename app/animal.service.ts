import { Injectable } from '@angular/core';
import { AnimalTreeNode } from '../app/animal-tree-node';
@Injectable()
export class AnimalService {
    getRootAnimalPromise(){
        let waz = new AnimalTreeNode("wąż", []);
        let kura = new AnimalTreeNode("kura", []);
        let pies = new AnimalTreeNode("pies", []);
        let czlowiek = new AnimalTreeNode("człowiek", []);
        let gady = new AnimalTreeNode("Gady", [waz]);
        let ptaki = new AnimalTreeNode("Ptaki", [kura]);
        let ssaki = new AnimalTreeNode("Ssaki", [czlowiek, pies]); 
        let root = new AnimalTreeNode("Zwierzęta",[ssaki, ptaki, gady]);
        return Promise.resolve(root);
    }
}