def search_for_words(sentence, words):

    words_in_sentence = sentence.split() # creates a list from the words in the sentence
    list_of_words = words.split(", ")
    found_word = {} # dict of the word and the number of times it appears in a sentence
    count = 0

    for i in list_of_words:
        count = 0

        if i in words_in_sentence:
            count += 1
            found_word[i] = count

        if words_in_sentence.count(i) > 1:
            count += words_in_sentence.count(i) - 1
            found_word[i] = count
    print(found_word)
    
    new_sentence = ''
    key_list = list(found_word.keys())

    for i in words_in_sentence:
        if i in key_list:
            i = 'X' * len(i)
        new_sentence += ' '
        new_sentence += i
       # else:
       #     new_sentence += ' '
       #     new_sentence += i
    print(new_sentence)

sentence = document.getElementById('divetext').value #input("Enter your text: ")
words = document.getElementById('divwl').value   # input("Enter the words you're searching for (use ',' between each word): ")
search_for_words(sentence, words)