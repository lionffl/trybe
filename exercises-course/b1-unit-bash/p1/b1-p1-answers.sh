# This file contains the answers from Block 01 - Part 1 of Web Development Course
# Student: Felipe Lima (lionffl@gmail.com)
# 21B Class

# Q1: Create a directory named `unix_test` and get in

mkdir unix_test
cd unix_test

# Q2: Make a text file named `trybe.txt`

touch trybe.txt

# Q3: Make a copy of `trybe.txt` and name this new file as `trybe_backup.txt`

cp trybe.txt trybe_backup.txt

# Q4: Rename the `trybe`.txt file

mv trybe.txt trybe2.txt

# Q5: Create a new directory named `backup` as a child of `unix_test` directory

cd unix_test
mkdir backup

# Q6: Move the `trybe_backup`.txt file to `backup` directory

mv trybe_backup.txt ./backup

# Q7: Create a new directory name `backup2` as a child of `unix_test` directory

cd unix_test
mkdir backup2

# Q8: Move the `trybe_backup.txt` from `backup` directory to `backup2` directory

cd unix_test
mv ./backup/trybe_backup.txt ./backup2

# Q9: Delete the `backup` directory

rmdir backup

# Q10: Rename the `backup2` directory as `backup`

mv /backup2 /backup

# Q11: Check the path to the active directory and list all files in it

pwd
ls -a

# Q12: Delete the `backup` directory

rmdir backup

# Q13: Clear the terminal

clear

# Q14: Make a text file named `skills.txt` and write, one word for line, the follow content: Internet, Unix, Bash, HTML, CSS, JavaScript, React, SQL. Save and show on terminal the firt 5 skills

touch skills.txt
echo Internet | cat >> skills.txt
echo Unix | cat >> skills.txt
echo Bash | cat >> skills.txt
echo HTML | cat >> skills.txt
echo CSS | cat >> skills.txt
echo JavaScript | cat >> skills.txt
echo React | cat >> skills.txt
echo SQL | cat >> skills.txt

head -5 skills.txt


# Q15: Using the file `skills.txt` created in the last question, now show the last 4 skills

tail -4 skills.txt

# Q16: Delete all the txt files

rm ~/unix_test/*.tx


# Note: The exercises in app.betrybe.com course are organized in block 1 / part 1 / part I & part II. Here, in this document, I will organize all the part 1 exercises (part I & II from course).
# Having said that, the question number 16 here is equivalent to the part II question 1 in the app.betrybe.com course.


# Q16: Use the curl command to download a list with countries and save it in `countries.txt`

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Q17: Show the `countries.txt` content

cat countries.txt

# Q18: Show, organized by page, the content of `countries.txt` file

less countries.txt

# Q19: Show again, organized by page, the content of `countries.txt` and enter a command to find `Zambia`

less countries.txt
/Zambia

# Q20: Search for `Brazil` in `countries.txt`

grep Brazil countries.txt

# Q21: Search for `brazil` (lower case) in `countries.txt`

grep -i brazil countries.txt

# Q22: Create a file named `phrases.txt` and write at will

cat phrases.txt
"A cornered fox is more dangerous than a jackal"
"I love dogs"
"But I love cais even more"
"CTRL + C"

# Q23: Search for phrase that DOES NOT contains the word `fox`

grep -v fox phrases.txt

# Q24: Count the number of words in `phrases.txt`

wc -w phrases.txt

# Q25: Count the number of lines in `phrases.txt`

wc -l phrases.txt

# Q26: Create files named `empty.tbt` and `empty.pdf`

touch empty.tbt
touch empty.pdf

# Q27: List all the files in `unix_tests` directory

ls ~/unix_tests

# Q28: List all the files that has .txt extension

ls *.txt

# Q29: List all the files that has .tbt or .txt extension

ls *.txt *.tbt

# Q30: Open the manual for `ls` command

man ls
