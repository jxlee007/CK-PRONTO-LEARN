def add(a,b):
    sum = a + b
    print(a,"+",b,"=",sum)
    
def subtract(a,b):
    sub = a - b
    print(a,"-",b,"=",sub)
    
def modulus(a,b):
    mod = a % b
    print(a,"%",b,"=",mod)

def multiply(a,b):
    product = a * b
    print(a,"*",b,"=",product)

def divide(a,b):
    divison = a / b
    print(a,"/",b,"=",divide)

def exponent(a,b):
    expo = a ** b
    print(a,"**",b,"=",expo)
    
print (" WELCOME TO SIMPLE ARITHEMETIC CALCULATOR")


print("\nMENU")
print("1. SUM ")
print("2. DIFFRENCE ")
print("3. MODULUS  ")
print("4. MULTIPLY ")
print("5. DIVISION ")
print("6. EXPONENT ")
print("7. EXIT ")
choice = int(input("\nENTER THE CHOICE :"))
    
if choice == 1:
    print("\nADDITION")
a = float(input("FIRST NUMBER"))
b = float(input("SECOND NUMBER"))
add(a,b)

elif choice == 2:
print("\nSUBTRACTION")
a = float(input("FIRST NUMBER"))
b = float(input("SECOND NUMBER"))
subtract(a,b)

elif choice == 3:
print("\nMODULUS")
a = float(input("FIRST NUMBER"))
b = float(input("SECOND NUMBER"))
modulus(a,b)

elif choice == 4:
print("\nMULTIPLICATION")
a = float(input("FIRST NUMBER"))
b = float(input("SECOND NUMBER"))
multiply(a,b)
    
elif choice == 5:
print("\nDIVISION")
a = float(input("FIRST NUMBER"))
b = float(input("SECOND NUMBER"))
divide(a,b)

elif choice == 6:
print("\nEXPONENTION")
a = float(input("FIRST NUMBER"))
b = float(input("SECOND NUMBER"))
exponent(a,b)

elif choice == 7:
break
    
else:
print("invalid input")