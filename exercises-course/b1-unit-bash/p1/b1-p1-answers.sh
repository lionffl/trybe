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

rm ~/unix_test/*.txt
