export class AnimalTreeNode {
    id: number;
    name: String;
    children: AnimalTreeNode[];
    expanded = false;
    
    constructor(id: number, n: String, c: AnimalTreeNode[]) {
        this.name = n;
        this.children = c;
    }
    
    expand(){
        this.expanded = !this.expanded;
    }
}