class Node:
    def __init__(self, data):
        self.data = data
        self.children = []
    
    def add_child(self, child):
        self.children.append(child)
        return child

def print_tree(node, level=0, prefix="└── "):
    # Print the current node with proper indentation
    print("    " * level + prefix + node.data)

    # Recursively print all children
    for child in node.children:
        print_tree(child, level + 1)

# Create the tree structure
def build_store_tree():
    # Create the root node
    store = Node("Store")
    
    # Create main categories
    electronics = Node("Electronics")
    clothing = Node("Clothing")
    
    # Add main categories to store
    store.add_child(electronics)
    store.add_child(clothing)
    
    # Create subcategories for Electronics
    phones = Node("Phones")
    computers = Node("Computers")
    
    # Add subcategories to Electronics
    electronics.add_child(phones)
    electronics.add_child(computers)
    
    # Create subcategories for Clothing
    men = Node("Men")
    women = Node("Women")
    
    # Add subcategories to Clothing
    clothing.add_child(men)
    clothing.add_child(women)
    
    return store

# Main function to run the program
def main():
    # Build the tree
    store_tree = build_store_tree()
    
    # Print the tree structure
    print("Store Product Categories:")
    print_tree(store_tree)

if __name__ == "__main__":
    main()