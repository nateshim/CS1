#Problem 1
def g(n):
	"""Return the value of g(n), computed recursively.
	g(n) works as follows:
		g(n) = n,		if n <= 3
		g(n) = g(n-1) + 2 * g(n-2) + 3 * g(n - 3) if n > 3

	>>>g(1)
	1
	>>>g(2)
	2
	>>>g(3)
	3
	>>>g(4)
	10
	>>>g(5)
	22
	"""
	"***YOUR CODE HERE***"
#Problem 2
def has_seven(numbers):
	"""Given a list of integers numbers, return True if the list contains a 7, False otherwise.

	>>>numbers = [0,1,2,3]
	>>>has_seven(numbers)
	False
	>>>numbers = [1,2,7]
	>>>has_seven(numbers)
	True
	"""
	"***YOUR CODE HERE***"
#Problem 3
def is_palindrome(number):
	"""Given a number in the form of a string, return True if the number is a palindrome, False otherwise.

	>>>is_palindrome("0"):
	True
	>>>is_palindrome("10"):
	False
	>>>is_palindrome("101"):
	True
	"""
	"***YOUR CODE HERE***"
#Problem 4
def count_change(amount):
	"""Return the number of ways to make change for amount.

	>>> count_change(7)
	6
	>>> count_change(10)
	14
	>>> count_change(20)
	60
	>>> count_change(100)
	982
	"""
	"***YOUR CODE HERE"