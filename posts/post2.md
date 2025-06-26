# Java Program: Find Maximum Using Ternary Operator

This post introduces how to simply find the maximum of two numbers using the **ternary operator** in Java.

### 💡 Program Code
```java
class Test {
    public static void main(String[] args) {
        int x = 10, y = 20, max;
        max = (x > y) ? x : y;
        System.out.println("Max=" + max);
    }
}
``` 
### 📤 Output
```bash 
    Max=20
```

### ✅ Explanation:
The ternary operator ``` (condition) ? value_if_true : value_if_false ``` is a shorthand for if-else.

Here, the expression ``` (x > y) ? x : y ``` evaluates to y because  x (10) is not greater than y (20).

So, max is assigned the value 20.
