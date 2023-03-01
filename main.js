/////////////HELPERS//////////////
function ascendingOrder(a, b) {  //only used if the array isn't sorted. 
return a - b;
}


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  print() {
    // outputs node values going down
    // the left side of the tree first
    // then working right
    if (this.left) {
      console.log(`${this.value} -> ${this.left.value}`);
      this.left.print();
    }

    if (this.right) {
      console.log(`${this.value} -> ${this.right.value}`);
      this.right.print()
    }
  }
}

function balancedBst(array) {
  if (array.length < 1) {
    return null;
  };
  const middleIndex = Math.floor(array.length / 2);
  const node = new TreeNode(array[middleIndex]);
  if (middleIndex > 0) {
    node.left = balancedBst(array.slice(0, middleIndex));
  };
  if (middleIndex < array.length) {
    node.right = balancedBst(array.slice(middleIndex + 1, array.length));
  };
  console.log(array);
  return node;
};

let a = [1,2,3,4,5,6,7,8];
let b = [8, 11, 22, 41, 69, 87, 93, 94];
let c = [];
let balancedTree = balancedBst(a);
let secondTree = balancedBst(b);
balancedTree.print();
secondTree.print();

                                                                                  //       69
                                                                                  //     /     \ 
                                                                                  //   22       93
                                                                                  //   / \     /  \             or something like this
                                                                                  //  11  41   87  94
                                                                                  //  /
                                                                                  // 8
console.log(balancedBst(a));
console.log(balancedBst(b));


