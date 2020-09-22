def square(x):
	return x * x
def triple(x):
	return 3*x
def identity(x):
	return x
def increment(x):
	return x + 1

#Problem 1
def fibonacci_recursive(n):
	"Return the nth number of the fibonacci sequence using recursion!"
	'***YOUR CODE HERE***'
#Problem 2
def product(n, term):
	"""Return the product of the first n terms in a sequence.

	n -- a positive integer
	term -- a function that takes one argument

	>>>product(3,identity) #1 * 2 * 3
	6
	>>>product(3,square) #1^2 * 2^2 * 3^2
	36
	>>>product(3, triple) #(1*3) * (2*3) * (3*3)
	162
	"""
	'***YOUR CODE HERE***'
#Problem 3
def repeated(f,n):
	"""Return the function that computes the nth application of f.

	>>>add_three = repeated(increment, 3)
	>>>add_three(5)
	8
	>>>repeated(triple, 5)(1) # 3 * 3 * 3 * 3 * 3 * 1
	243
	>>> repeated(square, 2)(5) # square(square(5))
	625
	>>>repeated(square, 4)(5) # square(square(square(square(5))))
	152587890625
	"""
	'***YOUR CODE HERE***'
#Problem 4
def triangle(rows):
	"""We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next
	   row has 3 blocks, and so on. Compute recursively(no loops or multiplication) the total number of blocks in
	   such a triangle with the given number of rows.

	   >>>triangle(0) #()
	   0
	   >>>triangle(1) #(#)
	   1
	   >>>triangle(2) #  (#)
	   				   (#)(#) 
	   3
	   >>>triangle(3) #  (#)
	   					(#)(#)
	   				   (#)(#)(#)
	   6
	   """
	   '***YOUR CODE HERE***'
