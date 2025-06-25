# Introduction to Java

This post introduces you to the basics of Java programming.

##### Input
```java
class Test{
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```
##### Output
```bash
  Hello, World!
```

| Category       | Function/Method                     | Usage Example                          | Description                                                                 |
|----------------|-------------------------------------|----------------------------------------|-----------------------------------------------------------------------------|
| **Output**     | `System.out.println()`             | `System.out.println("Hello");`        | Prints a line to the console with a newline at the end                      |
| **Input**      | `Scanner.nextLine()`               | `String input = scanner.nextLine();`  | Reads a line of text from user input                                        |
| **String**     | `String.length()`                  | `int len = str.length();`             | Returns the length of a string                                              |
|                | `String.substring()`               | `str.substring(1, 4);`                | Extracts a portion of a string                                              |
| **Math**       | `Math.max()`                       | `Math.max(5, 10);`                    | Returns the greater of two numbers                                         |
|                | `Math.random()`                    | `double r = Math.random();`           | Generates a random number between 0.0 and 1.0                               |
| **Arrays**     | `Arrays.sort()`                    | `Arrays.sort(arr);`                   | Sorts an array in ascending order                                           |
| **Collections**| `ArrayList.add()`                  | `list.add("Item");`                   | Adds an element to an ArrayList                                             |
|                | `HashMap.put()`                    | `map.put("Key", "Value");`            | Adds a key-value pair to a HashMap                                          |
| **File I/O**   | `Files.readString()`               | `String content = Files.readString(path);` | Reads all content from a file as a string                               |
| **OOP**        | `Object.toString()`                | `obj.toString();`                     | Returns a string representation of an object                                |
