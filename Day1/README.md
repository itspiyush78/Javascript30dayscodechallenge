### Variable Declaration

## Task1: Declare a variable using var, assign it a number, and log the value to the console.

# 1. Variable Declaration and Initialization:
```Javascript
var number = 88;
```
- `var`: Ye keyword JS mein ek variable declare karne ke liye use hota hai. `var` se declare kiye gaye variables function-scoped hote hain, means wo pure function mein accessible hote hain jahan wo declare kiye gaye hain.
  
- `number`: Ye variable ka naam hai. Variable naam ek identifier hota hai jo kisi bhi valid naam ko represent kar sakta hai.

- `= 88`: Ye assignment operator hai jo variable `number` ko value `88` assign karta hai. Yahaan, `88` ek numeric literal hai.

# 2. Logging to the Console:
```JavaScript
console.log(number);
```

- `console`: Ye JS ka global object hai jo browser ke debugging console tak access provide karta hai.

- `.log()`: Ye `console` object ka method hai jo console mein message print karne ke liye use hota hai. Ye debugging ke liye commonly use hota hai.

- `number`: Ye wo variable hai jiska value hum print karna chahte hain. Jab isse `console.log()` mein pass kiya jata hai, to ye `number` variable mein stored value ko console mein output karta hai.

**To, is code mein ek variable create hota hai jisme `88` value store hoti hai aur us value ko console mein print kiya jata hai.**

## Task2: Declare a variable using let, assign it a string, and log the value to the console.

# 1. Variable Declaration and Initialization:
```javascript
let greeting = "Hello, developers";
```

- `let`: Ye keyword JS mein ek variable declare karne ke liye use hota hai. `let` se declare kiye gaye variables block-scoped hote hain, means wo sirf us block ke andar accessible hote hain jahan wo declare kiye gaye hain (jaise function, loop, ya curly braces `{}` ke andar).

- `greeting`: Ye variable ka naam hai. Ye variable kisi bhi valid identifier ko represent kar sakta hai.

-`= "Hello, developers"`: Ye assignment operator hai jo variable `greeting` ko value `"Hello, developers"` assign karta hai. Yahaan, `"Hello, World!"` ek string literal hai.

# 2. Logging to the Console:
```javascript
console.log(greeting);
```

- `console`: Ye JavaScript ka global object hai jo browser ke debugging console tak access provide karta hai.

- `.log()`: Ye `console` object ka method hai jo console mein message print karne ke liye use hota hai. Ye debugging ke liye commonly use hota hai.

- `greeting`: Ye wo variable hai jiska value hum print karna chahte hain. Jab isse `console.log()` mein pass kiya jata hai, to ye `greeting` variable mein stored value ko console mein output karta hai.

**To, is code mein ek variable create hota hai jisme `"Hello, developers"` value store hoti hai aur us value ko console mein print kiya jata hai.**


### Constant Declaration

## Task3: Declare a variable using const, assign it a boolen value, to the console.

# 1. Variable Declaration and Initialization:
```javascript
const isTrue = true;
```

- `const`: Ye keyword JS mein ek variable declare karne ke liye use hota hai. `const` se declare kiye gaye variables block-scoped hote hain, aur inki value ko baad mein change nahi kiya ja sakta hai (immutable).

- `isTrue`: Ye variable ka naam hai. Ye variable kisi bhi valid identifier ko represent kar sakta hai.

- `= true`: Ye assignment operator hai jo variable `isTrue` ko boolean value `true` assign karta hai. Yahaan, `true` ek boolean literal hai.

# 2. Logging to the Console:
```javascript
console.log(isTrue);
```
- `console`: Ye JS ka global object hai jo browser ke debugging console tak access provide karta hai.

- `.log()`: Ye `console` object ka method hai jo console mein message print karne ke liye use hota hai. Ye debugging ke liye commonly use hota hai.

- `isTrue`: Ye wo variable hai jiska value hum print karna chahte hain. Jab isse `console.log()` mein pass kiya jata hai, to ye `isTrue` variable mein stored value ko console mein output karta hai.

**To, is code mein ek variable create hota hai jisme `true` value store hoti hai aur us value ko console mein print kiya jata hai.**

### Reassigning Variables

## Task5: Declare  a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

# 1. Initial Declaration and Assignment:
    ```javascript
    let myVariable = 20;
    console.log("Initial Value:", myVariable);
    ```

    - `let myVariable = 20;`: Yeh statement `myVariable` naam ka ek variable declare karta hai aur usme initial value `10` assign karta hai.

    - `console.log("Initial Value:", myVariable);`**: Yeh statement console mein `"Initial Value:"` aur `myVariable` ki current value (`20`) print karta hai.

# 2. Reassigning a New Value:**
    ```javascript
    myVariable = 30;
    console.log("New Value:", myVariable);
    ```
    -`myVariable = 30;`: Yeh statement `myVariable` ko nayi value `30` assign karta hai. Kyunki `let` se declare kiya gaya variable reassignable hota hai, isliye nayi value assign ki ja sakti hai.

    - `console.log("New Value:", myVariable);`: Yeh statement console mein `"New Value:"` aur `myVariable` ki current value (`30`) print karta hai.

### Understanding const

## Task6: Try reassigning a variable declared with const and observe the error.

# 1. Initial Declaration and Assignment:
    ```javascript
    const myConstant = 100;
    console.log("Initial Value:", myConstant);
    ```
    - `const myConstant = 100;`: Yeh statement `myConstant` naam ka ek variable declare karta hai aur usme initial value `100` assign karta hai. 
    Kyunki `const` se declare kiya gaya variable constant hota hai, isliye iski value baad mein change nahi ki ja sakti.

    - `console.log("Initial Value:", myConstant);`: Yeh statement console mein `"Initial Value:"` aur `myConstant` ki current value (`100`) print karta hai.

# 2. Attempting to Reassign:
    ```javascript
    myConstant = 200; // This will cause an error
    console.log("New Value:", myConstant);
    ```
    - `myConstant = 200;`: Yeh statement `myConstant` variable ko nayi value `200` assign karne ki koshish karta hai, lekin kyunki `myConstant` `const` se declare kiya gaya hai, isliye yeh assignment error throw karega.

    - `console.log("New Value:", myConstant);`: Yeh line execute nahi hogi kyunki error pehle hi aa chuka hai.

### Variable Types Console Log

- Number: Logs the number and its type.
- String: Logs the string and its type.
- Boolean: Logs the boolean value and its type.
- Object: Logs the object and its type.
- Array: Logs the array (which is technically an object) and its type.
- Null: Logs null and its type (which is object due to JavaScript behavior).
- Undefined: Logs undefined and its type.

**Each variable's value and type are printed to the console, demonstrating the different data types in JavaScript.**

### Reassignment Demo

# 1. Using `let`:
   ```javascript
   let myLetVar = 10;
   console.log("Initial value of myLetVar:", myLetVar);
   ```
   - **Declaration**: `myLetVar` is declared using `let` and initialized with `10`.
   - **Output**: Logs the initial value.

   ```javascript
   myLetVar = 20;
   console.log("Reassigned value of myLetVar:", myLetVar);
   ```
   - **Reassignment**: The variable is reassigned a new value `20`.
   - **Output**: Logs the reassigned value.

# 2. Using `const`:
   ```javascript
   const myConstVar = 30;
   console.log("Initial value of myConstVar:", myConstVar);
   ```
   - **Declaration**: `myConstVar` is declared using `const` and initialized with `30`.
   - **Output**: Logs the initial value.

   ```javascript
   try {
       myConstVar = 40; // This will cause an error
   } catch (error) {
       console.log("Error when reassigning myConstVar:", error.message);
   }
   ```
   - **Reassignment Attempt**: The script attempts to reassign `myConstVar` to `40`, which will throw an error because `const` variables cannot be reassigned.
   - **Error Handling**: A `try-catch` block is used to catch the error and log the error message.


- **`let`**: Allows reassignment of its value, making it flexible for scenarios where the value needs to change.
- **`const`**: Does not allow reassignment once initialized, ensuring the variable remains constant throughout its scope. This is useful for maintaining values that should not change.