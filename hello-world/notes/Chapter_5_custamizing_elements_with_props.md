Use an input tag ```input``` to define the fields.
Please refer this [page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) for number input field details.
For more details please check this [doc](https://react.dev/reference/react-dom/components/input).
```agsl
function App() {
    return <input 
    type="number" 
    min="{5}" 
    max="10" 
    list="{[1,2,3]}" 
    style="{{color: 'red'}}" 
    alt={message}
    />
}
```