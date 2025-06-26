# Java Program: Square and Cube of a Number

This program calculates the **square** and **cube** of a user-entered number.

### 💡 Program Code
```java
import java.util.*;

class Sqcube {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a Number: ");
        int x = in.nextInt();
        int sq = x * x;
        int cube = x * x * x;
        System.out.println("Square is = " + sq);
        System.out.println("Cube is = " + cube);
    }
}
```
### 📥 Input
```bash
Enter a Number: 5
```

### 📤 Output
```bash
Square is = 25
Cube is = 125
```

### ✅ Explanation:

Scanner is used for input.

Square is calculated using x * x.

Cube is calculated using x * x * x.

Results are printed using System.out.println()
Scanner is used for input.
Square is calculated using x * x.
Cube is calculated using x * x * x.

Results are printed using ```bash System.out.println(). ```
