Shorthand Expressions

To understand it let consider the following example of code.
```agsl
 function App() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return <h1>{time}</h1>;
}
```
which is also write like following, and it is called Shorthand Expression.
```agsl
 function App() {
    return <h1>{new Date().toLocaleTimeString()}</h1>;
}
```
So writing the expression directly inside the curly braces ```{}``` is called Shorthand Expression.