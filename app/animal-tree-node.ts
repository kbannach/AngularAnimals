export class AnimalTreeNode {
    name: String;
    children: AnimalTreeNode[];
    constructor(n: String, c: AnimalTreeNode[]) {
        this.name = n;
        this.children = c;
    }
}