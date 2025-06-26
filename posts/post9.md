# Java Program: Convert Meters to Kilometers

This program takes a distance in meters from the user and converts it into kilometers.

### 💡 Program Code
```java
import java.util.*;

class MtoKm {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter Meter: ");
        int m = in.nextInt();
        double km = (double) m / 1000;
        System.out.println(m + " Meters is = " + km + " Kilometer");
    }
}
```

### 📥 Input
```bash
Enter Meter: 1500
```

### 📤 Output
```bash
1500 Meters is = 1.5 Kilometer
```

### ✅ Explanation:

1 kilometer = 1000 meters.

The program reads input in meters and converts it by dividing by 1000.

The result is printed in kilometers with decimal precision.

