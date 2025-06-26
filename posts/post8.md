# Java Program: Average of Three Numbers

This program calculates the **average** of three numbers entered by the user.

### 💡 Program Code
```java
import java.util.*;

class Average {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the First Number: ");
        int x = in.nextInt();
        System.out.print("Enter the Second Number: ");
        int y = in.nextInt();
        System.out.print("Enter the Third Number: ");
        int z = in.nextInt();
        double avg = (double) (x + y + z) / 3;
        System.out.println("Average is = " + avg);
    }
}
```

### 📥 Input
```bash
Enter the First Number: 10  
Enter the Second Number: 20  
Enter the Third Number: 30
```

### 📤 Output
```bash
Average is = 20.0
```
✅ Explanation:

Scanner is used to take three integer inputs.

The sum of the three numbers is divided by 3, cast to double for precision.

The result is printed using System.out.println().
