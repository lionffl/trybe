# This file contains the answers from Block 01 - Part 2 of Web Development Course
# Student: Felipe Lima (lionffl@gmail.com)
# 21B Class

# Q1: Go to the `unix_tests` directory

cd unix_tests

# Q2: Create a text file name `skills2.txt` and write the follow: `Internet, Unix and Bash`, one word per line

cat > skills2.txt
Internet
Unix
Bash
^C

# Q3: Insert another five itens in `skills2.txt` and print an ordered list

cat >> skills2.txt
JavaScript
React
SQL
^C

sort skills2.txt

# Q4: Print the number of lines in `skills2.txt`

wc -l skills2.txt

# Q5: Create another file named `top_skills` using the previous file `skills2.txt`. The new file must contains the first 3 skills, ordered, from the previous file.

sort skills2.txt | head -3 > top_skills.txt

# Q6: Create a file named `phrase2.txt` and write at will

cat > phrase2.txt
I love Brazil
Violet is blue
Rose is red
^C

# Q7: Print the number of lines that contains `br`

grep br phrase2.txt | wc -l

# Q8: Print the number of lines that DOES NOT contains `br`

grep -v br phrase2.txt | wc -l

# Q9: Write 2 countries at the end of `phrases2.txt` file

cat >> phrase2.txt
brazil
argentina
^C

# Q10: Create a file named `bunch_of_things.txt` and write on it the content of `phrases2.txt` and `countries.txt` files

cat >> countries.txt phrases2.txt > bunch_of_things.txt

# Q11: Sort the `bunch_of_things.txt` file

sort bunch_of_things.txt

# Note: The exercises in app.betrybe.com course are organized in block 1 / part 1 / part I & part II. Here, in this document, I will organize all the part 2 exercises (part I, II and III from course).
# Having said that, the question number 12 here is equivalent to the part II question 1 in the app.betrybe.com course, the question number 17 here is equivalent to the part III question 1 etc.


