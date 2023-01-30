import random

# #   Exercício 1:

# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo: Entrada:


def print_inverse_ladder(word):
    i = len(word)
    while i >= 0:
        print(word[0:i], end="") if i == 0 else print(word[0:i])
        i -= 1
        


print_inverse_ladder("PEDRO")

print('----------------------------------------------------------------')

# Exercício 2:

# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".

words = ["Love", "Respect", "Games", "Money", "Health", "Friendship"]

def game(words): 
    word, scrambled_word = get_scramble_word(words)
    tries = 3
    
    while tries > 0:
        print(f"What is the correct word?: - Chances: #{tries}")
        print(scrambled_word)
        user_input = input(": ")
        if user_input.upper() == word.upper():
            break
        tries -= 1
    
    print("You lose!") if tries == 0 else print("You win!")
    
    
def get_scramble_word(words):
    random_index = random.randint(0, len(words) - 1) 
    word = words[random_index]
    scrambled_word = random.sample(word, len(word))
    return [word, "".join(scrambled_word).upper()]
  
game(words)

