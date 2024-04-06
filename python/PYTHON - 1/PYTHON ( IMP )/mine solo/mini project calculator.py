# mini project on calculator
first   = input ("Enter the num-1:")
operator= input ("Enter operator (+,-,%,*,/):")
second  = input ("Enter the num-2:")

first = int(first)
second = int(second)

if operator == "+" :
    print(first + second)
elif operator == "-" :
    print(first - second)
elif operator == "/" :
    print(second / first)
elif operator == "*" :
    print(first * second)
elif operator == "%" :
    print(first % second)
else :
    print("Invalid operation")




