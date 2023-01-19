family = ["felipe", "janine", "lais"]

enum = enumerate(family)

for index, element in enum:
    print(index, element)

def factorial_recursive(number):
    if number == 1:
        return number
    
    return number * factorial_recursive(number - 1)


def factorial(number):
    elements = [*range(1, number + 1)]

    result = 1
    
    for element in elements:
        result = result * element
    
    return result


def by_ten(arr):
    ten = list()

    for i in arr:
        ten.append(i*10) 
        if i % 3 == 0:
            print(f'{i} is multiple of 3')
    
    
    return ten

print(factorial(5))

print(by_ten([5, 10, 99]))

print(__name__)