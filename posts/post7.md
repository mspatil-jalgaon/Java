# Java Program: Division of Two Numbers

This program takes two numbers as input from the user and displays the **result of their division**.

### 💡 Program Code
```java
import java.util.*;

class Division {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the First Number: ");
        int x = in.nextInt();
        System.out.print("Enter the Second Number: ");
        int y = in.nextInt();
        double div = (double) x / y;
        System.out.println("Division is = " + div);
    }
}
```
### 📥 Input
Enter the First Number: 15  
Enter the Second Number: 4

### 📤 Output
Division is = 3.75

### ✅ Explanation:

We use ``` (double) x / y ``` to force floating-point division, even when inputs are integers.

Using Scanner, the program takes two numbers as input.

The result is displayed using System.out.println().
