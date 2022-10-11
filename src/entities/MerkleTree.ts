import MarkleNode from "./MerkleNode";
import { hash } from "../helpers";

class MarkleTree {
  root: any;
  leaves: any;
  layers: any;
  constructor(transactions: string[]) {
    this.root = [];
  }

  private createTree(transactions: string[]) {
    const leaves = transactions.map((transaction) =>
      this.createNode(transaction, null, null)
    );
    //TODO: create parent nodes
  }

  private createNode(
    transaction: string,
    left: MarkleNode | null,
    right: MarkleNode | null
  ) {
    return new MarkleNode(hash(transaction), left, right);
  }
}
