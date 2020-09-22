from hw02 import square, triple, identity, increment, fibonnaci_recursive, product, repeated, triangle, 

def problem_one():
	retval = 0
	if fibonacci_recursive(1) == 1:
		retval += 1
	if fibonacci_recursive(5) == 5:
		retval += 1
	if fibonacci_recursive(7) == 13:
		retval += 1
	if fibonacci_recursive(13) == 233:
		retval += 1
	if retval == 4:
		print("PROBLEM 1: " + str(retval) + "/4 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 1: " + str(retval) + "/4 TEST CASES PASSED")

def problem_two():
	retval = 0
	if product(3,identity) == 6:
		retval += 1
	if product(3,square) == 36:
		retval += 1
	if product(3, triple) == 162:
		retval += 1
	if retval == 3:
		print("PROBLEM 2: " + str(retval) + "/3 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 2: " + str(retval) + "/3 TEST CASES PASSED")

def problem_three():
	retval = 0
	if repeated(increment, 3)(5) == 8:
		retval += 1
	if repeated(triple, 5)(1) == 243:
		retval += 1
	if repeated(square, 2)(5) == 625:
		retval += 1
	if repeated(square, 4)(5) == 152587890625:
		retval += 1
	if retval == 4:
		print("PROBLEM 3: " + str(retval) + "/4 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 3: " + str(retval) + "/4 TEST CASES PASSED")

def problem_four():
	retval = 0
	if triangle(0) == 0:
		retval += 1
	if triangle(1) == 1:
		retval += 1
	if triangle(2) == 3:
		retval += 1
	if triangle(3) == 6:
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