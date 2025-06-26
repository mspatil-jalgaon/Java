# Java Addition Program

This program takes two integers as input from the user and calculates their sum.

### 💡 Program Code
```java
import java.util.*;

class Addittion {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the First Number: ");
        int x = in.nextInt();
        System.out.print("Enter the Second Number: ");
        int y = in.nextInt();
        int sum = x + y;
        System.out.println("Additton is = " + sum);
    }
}
```
### 📥 Input
Enter the First Number: 10  
Enter the Second Number: 20

### 📤 Output
Additton is = 30

### ✅ Explanation:
We use Scanner to take input from the user.

```bash nextInt() ``` reads integer values.

The addition result is stored in the variable sum and displayed using System.out.println.
