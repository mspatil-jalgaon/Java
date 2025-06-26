# Java Program: Area of a Circle

This program calculates the **area of a circle** using the formula `Area = π * r²`.

### 💡 Program Code
```java
import java.util.*;

class Sqcube {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a Radius: ");
        int x = in.nextInt();
        double area = 3.14 * x * x;
        System.out.println("Area of Circle = " + area);
    }
}
```
### 📥 Input
Enter a Radius: 7

### 📤 Output
Area of Circle = 153.86

### ✅ Explanation:
``` Scanner ``` is used to take user input.
The formula ``` π * r² ``` is used with ``` π ``` approximated as ``` 3.14. ``` 
``` x ``` is the radius.
The area is calculated and printed using ``` System.out.println(). ```
