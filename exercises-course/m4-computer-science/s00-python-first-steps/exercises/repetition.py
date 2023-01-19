def append_each_letter_of_the_word_in_a_list(word):
    letters = []
    for letter in word:
      letters.append(letter)
    return letters


def return_index_of_the_uppercase_letter(word: str):
    for letter in word:
      if letter.isupper():
        index = word.find(letter)
    return index


def return_element_from_list_that_is_string(input_list):
    for element in input_list:
      if isinstance(element, str):
        result = element
    return result
