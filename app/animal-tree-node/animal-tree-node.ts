export class AnimalTreeNode {
    name: String;
    children: AnimalTreeNode[];
    expanded = false;
    
    constructor(n: String, c: AnimalTreeNode[]) {
        this.name = n;
        this.children = c;
    }
    
    expand(){
        this.expanded = !this.expanded;
    }
}