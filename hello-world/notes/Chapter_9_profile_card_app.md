<h1 style="color: yellowgreen">Personal Digital Assistance</h1>
In this chapter we're going to exercise what we learned so far. 
In this we will create the <span style="background: black">Personal Digital Assistance</span> in <span style="background: black">React.js</span>.

To make this app we are going to need following things.

src
|-----PDACard.js: Create a component that will show a single card.<br/>
|-----App.js: Create app component that will show 3 copies of ProfileCard component.<br/>
|-----index.js: Renders the app component on the screen.<br/>

<h3 style="color: yellowgreen">Introduction to Property System</h3>
Props system is used to communicate or share data between components.
Props system had the following advantages.
<ul>
<li>Props system passes data from a parent to a child.</li>
<li>Allows a parent to configure each child differently (Show different text, styles etc).</li>
<li>One way flow of data. Child can't push props back up.</li>
<li>Like 25% o understanding React.</li>
</ul>

There are four steps to create the props which are following.<br/>
<ol>
<li>Add attributes to a JSX element.</li>
<li>Collect that attribute and put them in an object.</li>
<li>Props object shows up as the first argument to the child component function.</li>
<li>We can use props however we wish.</li>
</ol>
for example check the following code snippet.

```agsl
function App() {
    return <Child color='red' />
}

function Child(props) {
    return <div>{props.color}</div>
}
```

From above code snippet we can clearly understand that props is nothing but the object. 






