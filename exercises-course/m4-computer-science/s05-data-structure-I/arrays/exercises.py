report1 = [0, 1, 1, 1, 0, 0, 1, 1]

report2 = [1, 1, 1, 1, 0, 0, 1, 1]

def get_better_perf(report):
    grade = 0
    max_grade = 0
    
    for element in report:
        if element == 1:
            grade += 1
            if grade > max_grade:
                max_grade = grade
        else:
            grade = 0
    
    return max_grade
  

perf1 = get_better_perf(report1)
perf2 = get_better_perf(report2)

print(perf1)
print(perf2)