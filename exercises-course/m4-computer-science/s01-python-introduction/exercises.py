# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def get_bigger(numberA, numberB):
    return numberA if numberA > numberB else numberB

print(get_bigger(1, 5))


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def average(input_list):
    leng = len(input_list)
    sum = 0
    
    for element in input_list:
        sum = sum + element
    
    return sum / leng

print(average([3, 3, 3]))


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:


def print_square(number):    
    if number <= 1:
        print("Input a number greater than 1")
    else:
        def print_line():
            for i in range(number):
                print("*", end='')
        
        for i in range(number):
            print_line()
            print()
        
print_square(3)


# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


def get_greater_word(words):
    result = ''
    big = 0

    for word in words:
        if len(word) > big:
            result = word
            big = len(word)
    return result

print(get_greater_word(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²). 


def get_budget(area):
    liter = area / 3
    inks = round(liter / 18, 2)
    budget = 80 * inks
    return (budget,inks)

print(get_budget(54))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo. 


def triangle(sideA, sideB, sideC):
    if sideA + sideB <= sideC or sideA + sideC <= sideB or sideB + sideC <= sideA:
        return "Not a triangle"
    elif sideA == sideB == sideC:
        return "Equi"
    elif sideA == sideB or sideB == sideC or sideA == sideC:
        return "Iso"
    elif sideA != sideB and sideA != sideC and sideB != sideC:
        return "Esc"

print(triangle(1, 0, 1))

