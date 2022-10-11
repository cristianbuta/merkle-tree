class MarkleNode {
  constructor(
    readonly hash: string,
    readonly left: MarkleNode | null,
    readonly right: MarkleNode | null
  ) {
    this.hash = hash;
    this.left = left;
    this.right = right;
  }
}

export default MarkleNode;
