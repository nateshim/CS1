from hw00 import add, sub, mul, div, quick_math_one, quick_math_two, a_plus_abs_b, two_of_three, if_function
def  problem_one():
	retval = 0
	#ADD
	if add(1,2) == 3 and add(2,3) == 5 and add(-1,2) == 1:
		retval += 1
	#SUB
	if sub(4,2) == 2 and sub(2,3) == -1 and sub(5,4) == 1:
		retval += 1
	#MUL
	if mul(2,2) == 4 and mul(2,3) == 6 and mul(9,5) == 45:
		retval += 1
	#DIV
	if div(4,2) == 2 and div(6,3) == 2 and div(3,2) == 1.5:
		retval += 1
	if retval == 4:
		print("PROBLEM 1: " + str(retval) + "/4 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 1: " + str(retval) + "/4 TEST CASES PASSED")
def problem_two():
	retval = 0
	if quick_math_one() == 224:
		retval += 1
	if quick_math_two() == 300:
		retval += 1
	if retval == 2:
		print("PROBLEM 2: " + str(retval) + "/2 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 2: " + str(retval) + "/2 TEST CASES PASSED")

def problem_three():
	retval = 0
	if a_plus_abs_b(3,-3) == 6 and a_plus_abs_b(-3,3) == 0 and a_plus_abs_b(-4,-6) == 2:
		retval += 1
	if retval == 1:
		print("PROBLEM 3: " + str(retval) + "/1 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 3: " + str(retval) + "/1 TEST CASES PASSED")
def problem_four():
	retval = 0
	if two_of_three(1,2,3) == 13:
		retval += 1
	if two_of_three(5,3,1) == 34:
		retval += 1
	if two_of_three(10,2,8) == 164:
		retval += 1
	if two_of_three(5,5,5) == 50:
		retval += 1
	if retval == 4:
		print("PROBLEM 4: " + str(retval) + "/4 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 4: " + str(retval) + "/4 TEST CASES PASSED")
def problem_five():
	retval = 0
	if if_function(True, 1,0) == 1:
		retval += 1
	if if_function(False, 1, 0) == 0:
		retval += 1
	if if_function(1,1,0) == 1:
		retval+= 1
	if if_function(0,1,0) == 0:
		retval+=1
	if retval == 4:
		print("PROBLEM 5: " + str(retval) + "/4 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 5: " + str(retval) + "/4 TEST CASES PASSED")



if __name__ == "__main__":
	problem_one()
	problem_two()
	problem_three()
	problem_four()
	problem_five()
	