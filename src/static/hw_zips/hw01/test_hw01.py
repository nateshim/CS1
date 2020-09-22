from hw01 import fibonacci, hailstone, largest_factor, factorial

def problem_one():
	retval = 0
	if fibonacci(1) == 1:
		retval += 1
	if fibonacci(5) == 5:
		retval += 1
	if fibonacci(7) == 13:
		retval += 1
	if fibonacci(13) == 233:
		retval += 1
	if retval == 4:
		print("PROBLEM 1: " + str(retval) + "/4 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 1: " + str(retval) + "/4 TEST CASES PASSED")
def problem_two():
	retval = 0
	if hailstone(10) == 7:
		retval += 1
	if hailstone(1) == 1:
		retval += 1
	if hailstone(20) == 8:
		retval += 1
	if retval == 3:
		print("PROBLEM 2: " + str(retval) + "/3 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 2: " + str(retval) + "/3 TEST CASES PASSED")

def problem_three():
	retval = 0
	if largest_factor(4) == 3:
		retval += 1
	if largest_factor(9) == 8:
		retval += 1
	if largest_factor(10) == 9:
		retval += 1
	if retval == 3:
		print("PROBLEM 3: " + str(retval) + "/3 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 3: " + str(retval) + "/3 TEST CASES PASSED")

def problem_four():
	retval = 0
	if factorial(4) == 24:
		retval += 1
	if factorial(10) == 3628800:
		retval += 1
	if factorial(8) == 40320:
		retval += 1
	if factorial(6) == 720:
		retval += 1
	if retval == 4:
		print("PROBLEM 4: " + str(retval) + "/4 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 4: " + str(retval) + "/4 TEST CASES PASSED")

if __name__ == "__main__":
	problem_one()
	problem_two()
	problem_three()
	problem_four()