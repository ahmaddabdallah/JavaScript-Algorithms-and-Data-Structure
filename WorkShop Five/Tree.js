class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
    return child;
  }
}

function printTree(node, level = 0, prefix = "└── ") {
  // Print the current node with proper indentation
  console.log("    ".repeat(level) + prefix + node.data);
  
  // Recursively print all children
  for (const child of node.children) {
    printTree(child, level + 1);
  }
}

// Create the tree structure
function buildStoreTree() {
  // Create the root node
  const store = new Node("Store");
  
  // Create main categories
  const electronics = new Node("Electronics");
  const clothing = new Node("Clothing");
  
  // Add main categories to store
  store.addChild(electronics);
  store.addChild(clothing);
  
  // Create subcategories for Electronics
  const phones = new Node("Phones");
  const computers = new Node("Computers");
  
  // Add subcategories to Electronics
  electronics.addChild(phones);
  electronics.addChild(computers);
  
  // Create subcategories for Clothing
  const men = new Node("Men");
  const women = new Node("Women");
  
  // Add subcategories to Clothing
  clothing.addChild(men);
  clothing.addChild(women);
  
  return store;
}

// Main function to run the program
function main() {
  // Build the tree
  const storeTree = buildStoreTree();
  
  // Print the tree structure
  console.log("Store Product Categories:");
  printTree(storeTree);
}

// Run the program
main();