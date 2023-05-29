<h2 style="color: yellowgreen">Converting HTML to JSX</h2>
<p>Names/values of attributes that you provide to elements in HTML are slightly different writing the JSX.</p>

<p>Following are the step of converting HTML to JSX</p>
<ol>
<li>All props names follows `camelCase`</li>
<li>Number attributes use curly braces.</li>
<li>Boolean 'true' can be written with just the property name. 'False' should be written with curly braces</li>
<li>The class attribute is written as className</li>
<li>Inline styles are provides as objects</li>
</ol>

<h3>All props names follows `camelCase`</h3>
```
function App() {
    return <textarea autoFocus={true}/>;
}
```

<h3>`Number` attributes use curly braces.</h3>
```
function App() {
    return <input maxLength="{5}"/>;
}
```

<h3>Boolean `true` can be written with just the property name. `False` should be written with curly braces</h3>
```
function App() { 
    return <input maxLength="{5}" spellCheck/>;
}
function App() { 
    return <input maxLength="{5}" spellCheck={false}/>;
}
```

<h3>The `class attribute` is written as `className`</h3>
```
function App() {
    <li className="item"/>
    return <div className="divider"/>;
}
```

<h3>Inline `styles` are provides as `objects`</h3>
```
function App() {
    <li className="item"/>
    return <div className="divider"/>;
}
```