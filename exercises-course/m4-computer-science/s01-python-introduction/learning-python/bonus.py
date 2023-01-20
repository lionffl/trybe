# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2. 

number_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

def get_minor(input_list):
    return min(input_list)

print(get_minor(number_list))

# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base: 

def print_tri(base):
  for i in range(0, base):
      for j in range(0, i + 1):
          print("* ", end="")

      print()       


print_tri(3)

# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15. 

def sum_all_recursive(number):
    if number == 1:
        return number
    
    return number + sum_all_recursive(number - 1)

print(sum_all_recursive(5))

# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos: 

  # Álcool:
  #   - Até 20 litros, desconto de 3% por litro;
  #   - Acima de 20 litros, desconto de 5% por litro.
  #   - Preco: 1.90
  # Gasolina:
  #   - Até 20 litros, desconto de 4% por litro;
  #   - Acima de 20 litros, desconto de 6% por litro.
  #   - Preco: 2.50

  # Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

def get_fuel_price(liters, fuel:str):
    alc_price = 1.9
    gas_price = 2.5

    match fuel.upper():
        case 'A':
            return round(liters * alc_price, 2)
        case 'G':
            return round(liters * gas_price, 2)
        case _:
            return "Fuel not found"

print(get_fuel_price(5, 'a'))  