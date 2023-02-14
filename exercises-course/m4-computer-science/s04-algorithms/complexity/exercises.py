import random


def battleship(grid, line, column):
    return if(grid[line][column] == 1)


# O(1)
  
def random_averages(n):
    averages = []

    for _ in range(100):
        acc = 0
        for _ in range(n):
            acc += random.randrange(1, n)
        average = acc / n
        averages.append(average)

    return averages
  
# O(n) for time complexity
# O(1) for space complexity