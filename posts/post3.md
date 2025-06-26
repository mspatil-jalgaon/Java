# Java Input and Output Example

This example demonstrates how to take input from the user and display it using Java.

### 💡 Program Code
```java
import java.util.*;

class Number {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the Number: ");
        int n = in.nextInt();
        System.out.println("Number is= " + n);
    }
}
```
### 📥 Input
Enter the Number: 1010

### 📤 Output
Number is= 1010

### ✅ In this program:
Scanner is used to read input from the user.
```bash nextInt()`` reads an integer.
The input is then printed using System.out.println.
