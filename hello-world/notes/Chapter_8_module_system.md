<h1 style="color: yellowgreen">Module System <a href="https://react.dev/learn/importing-and-exporting-components">[import/export]</a></h1>

Each file in `React` has the separated isolated context by default due which you can not access the that file content directly.
For example, you have two files let say `index.js` and `App.js`. So you cannot access the `App.js` inside the `index.js` without importing it.
That means you cannot use any var or property of `App.js` inside `index.js` without importing it first.


There are two things we are going to discuss in this.
<ul><li>Import</li><li>Export</li></ul>

<h3>Export statements</h3>
There are two types of export statements which is `default` and `named`.
<h4>default export</h4>:  One file can only have one default export statement.
eg: ```export default App;``` 
Following happens in behind the scenes.
1. Declare a variable call App.
2. Find the default export from App.js.
3. Assign the default export to App variable.

`named exports` is use when you wanna exporting multiple variables to particular files.
You can have as many named export as you want.
There are two ways to write a named exports.
First is 
``` 
const message = "Hello World!";
export {message};
```
or second is 
```agsl
export const message = 'Hello World!';
```

`named export` cannot be renamed like `default exports`.






