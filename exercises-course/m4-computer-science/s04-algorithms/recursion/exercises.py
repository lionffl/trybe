def factorial(n): # 5
    if n == 1:
        return n
    else:
        return n * factorial(n - 1)
    

def recursive_sum(n):
    if n == 0:
        return n
    else:
        return n + recursive_sum(n - 1)


result = recursive_sum(4)
print(f"Sum: {result}")
result = factorial(5)
print(f"Factorial: {result}")