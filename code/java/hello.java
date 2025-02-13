/*
Basics 
    data types-> float double int String
    operators-> + - * / %
    assignment-> = += -= *= /= %=
Control Flow
    input output = tip
    conditionals = comparison operators
    - if else else-if
    - switch 
    multiple conditions = logical operators -> && || 
    - while loop


*/

// import java.util.*;
import java.util.Scanner;

class test{
    public static void main (String[] args){
        // String hello = "know me";
        int a = 8;
        int b = 3;
        System.out.println(a%b);

        Scanner obj = new Scanner(System.in);    
        String name = obj.nextLine(); 
        double age = obj.nextDouble(); 
        System.out.println(name+" "+age); 

        obj.close(); // Close the Scanner object
    };
}

/* Tip Calculator 
You always tip 15% of the bill amount.
Task: Take the bill amount as input and output the corresponding tip amount, which should be 15% of the amount.
To calculate 15% of a number, multiply it by 15, then divide by 100.
 */

class tip{
    public static void main(String[] args) {
        
        Scanner obj = new Scanner(System.in);
        double bill = obj.nextDouble();

        double tip = bill * 15 / 100;
        System.out.println("tip = "+tip);

        obj.close();
    }
}

/* Boiling Water 
You are making a program for a water sensor that should check if the water is boiling.
Take the integer temperature in Celsius as input and output "Boiling" if the temperature is above or equal to 100.
Output "Not boiling" if it's not.
Sample Input = 105
Sample Output = Boiling
 */

class water{
    public static void main(String[] args){
        Scanner obj = new Scanner(System.in);
        double temp = obj.nextDouble();

        if (temp<=100){
            System.out.println("Not boiling");
        }else{
            System.out.println("Boiling");
        }

        obj.close();
    }
}

/* You are making a robot that should categorize items by their color.
Each color corresponds to a box with a specific number.
For simplicity, our program will handle 3 colors:
red goes to box #1
green goes to box #2
black goes to box #3

Your program needs to take a color as input and output the corresponding box number.
Sample Input = green
Sample Output = 2
 */

class box {
    public static void main(String[] args){
        Scanner obj = new Scanner(System.in);
        
         // Get the color from the user.
         System.out.println("Enter the color of the item: ");
         String color = obj.nextLine();

         // Determine the box number for the color.
        int box;
        switch (color) {
            case "red":
                box = 1;
                break;
            case "green":
                box = 2;
                break;
            case "black":
                box = 3;
                break;
            default:
                box = -1;
        }

        // Output the box number.
        if (box == -1) {
            System.out.println("Invalid color.");
        } else {
            System.out.println("The item should be placed in box number " + box);
        }

        obj.close();
    }
}

/* Age Group
Given the age of a person as an input, output their age group.
Here are the age groups you need to handle:
Child: 0 to 11
Teen: 12 to 17
Adult: 18 to 64

Sample Input = 42
Sample Output = Adult
Remember, you can use the AND operator to combine conditions, like x>0 && x<20.
*/

class age{
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        int age = obj.nextInt();
        
        if (age>=0 && age<=11){
            System.out.println("Child");
        }
        else if (age>=12 && age<=17){
            System.out.println("Teen");
        }
        else if (age>=18 && age<=64){
            System.out.println("Adult");
        }
        else{
            System.out.println("Invalid age");
        }

        obj.close();
    }
}

/*
 Sum
Your math teacher asked you to calculate the sum of the numbers 1 to N, where N is a given number.
Task: Take an integer N from input and output the sum of the numbers 1 to N, inclusive.
Sample Input: 10
Sample Output: 55
*/

class loop{
    public static void main(String[] args) {
        
        Scanner obj = new Scanner(System.in);
        int n = obj.nextInt();
        int sum = 0;
        int num = 0;

        while (num<=n) {
            sum += num;
            num++;
        }
        System.out.println(sum);
    }
}

/*
 Factorial
The factorial of a number N is equal to 1 * 2 * 3 * ... * N
For example, the factorial of 5 is 1* 2 * 3 * 4 * 5  = 120.
Create a program that takes a number from input and output the factorial of that number.
Use a for loop to make the calculation, and start the loop from the number 1.
 */

class fact{
    public static void main(String[] args) {
        
        Scanner obj = new Scanner(System.in);
        int n = obj.nextInt();
        int factorial = 1;

        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println(factorial);
    }
}