class Node():
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __str__(self):
        return f"Node(value = {self.value} - next = {self.next})"

first_node = Node("A")
second_node = Node("B")

first_node.next = second_node

print(first_node)
print(second_node)