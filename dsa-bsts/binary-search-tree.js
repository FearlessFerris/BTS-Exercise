class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
        this.root = newNode;
        return this;
    }

    let current = this.root;
    while (true) {
        if (val === current.val) return undefined; // Assuming no duplicate values allowed
        if (val < current.val) {
            if (!current.left) {
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if (!current.right) {
                current.right = newNode;
                return this;
            }
            current = current.right;
        }
    }
  }

  insertRecursively(val, current = this.root) {
    const newNode = new Node(val);
    if (!this.root) {
        this.root = newNode;
        return this;
    }

    if (val < current.val) {
        if (!current.left) {
            current.left = newNode;
            return this;
        }
        return this.insertRecursively(val, current.left);
    } else {
        if (!current.right) {
            current.right = newNode;
            return this;
        }
        return this.insertRecursively(val, current.right);
    }
  }

  find(val) {
    let current = this.root;
    while (current) {
        if (val === current.val) return current;
        if (val < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return undefined;
  }

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
    if (val === current.val) return current;
    if (val < current.val) {
        return this.findRecursively(val, current.left);
    } else {
        return this.findRecursively(val, current.right);
    }
  }

  dfsPreOrder(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.val);
    this.dfsPreOrder(node.left, result);
    this.dfsPreOrder(node.right, result);
    return result;
  }

  dfsInOrder(node = this.root, result = []) {
    if (!node) return result;
    this.dfsInOrder(node.left, result);
    result.push(node.val);
    this.dfsInOrder(node.right, result);
    return result;
  }

  dfsPostOrder(node = this.root, result = []) {
    if (!node) return result;
    this.dfsPostOrder(node.left, result);
    this.dfsPostOrder(node.right, result);
    result.push(node.val);
    return result;
  }

  bfs() {
    const result = [];
    const queue = [this.root];
    let current;

    while (queue.length) {
        current = queue.shift();
        result.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return result;
  }

  remove(val) {
    // Implementation for remove method (optional further study)
  }

  isBalanced() {
    // Implementation for isBalanced method (optional further study)
  }

  findSecondHighest() {
    // Implementation for findSecondHighest method (optional further study)
  }
}

module.exports = BinarySearchTree;
