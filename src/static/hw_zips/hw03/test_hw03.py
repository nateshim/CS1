from hw03 import g, has_seven, is_palindrome, count_change

def problem_one():
	retval = 0
	if g(1) == 1:
		retval += 1
	if g(2) == 2:
		retval += 1
	if g(3) == 3:
		retval += 1
	if g(4) == 10:
		retval += 1
	if g(5) == 22:
		retval += 1
	if retval == 5:
		print("PROBLEM 1: " + str(retval) + "/5 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 1: " + str(retval) + "/5 TEST CASES PASSED")
def problem_two():
	retval = 0
	numbers = [0,1,2,3]
	if not has_seven(numbers):
		retval += 1
	numbers = [1,2,7]
	if has_seven(numbers):
		retval += 1
	numbers = [0,1,2,3,4,5,6,7]
	if has_seven(numbers):
		retval += 1
	if retval == 3:
		print("PROBLEM 2: " + str(retval) + "/3 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 2: " + str(retval) + "/3 TEST CASES PASSED")
def problem_three():
	retval = 0
	if is_palindrome("0"):
		retval += 1
	if not is_palindrome("10"):
		retval += 1
	if is_palindrome("101"):
		retval += 1
	if retval == 3:
		print("PROBLEM 3: " + str(retval) + "/3 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 3: " + str(retval) + "/3 TEST CASES PASSED")
def problem_four():
	retval = 0
	if count_change(7) == 6:
		retval += 1
	if count_change(10) == 14:
		retval += 1
	if count_change(20) == 60:
		retval += 1
	if retval == 3:
		print("PROBLEM 4: " + str(retval) + "/3 TEST CASES PASSED")
		print("CONGRATULATIONS ALL TEST CASES PASSED")
	else:
		print("PROBLEM 4: " + str(retval) + "/3 TEST CASES PASSED")


if __name__ == "__main__":
	problem_one()
	problem_two()
	problem_three()
	problem_four()