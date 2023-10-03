// import useCounter from '../hooks/use-counter';
import Button from "../mcomponents/Button";
import Panel from "../mcomponents/Panel";
import {useReducer} from "react";


const INCREMENT_ACTION = 'increment-counter'
const DECREMENT_ACTION = 'decrement-counter'
const CHANGE_VALUE_TO_ADD_ACTION = 'change-value-to-add'
const FORM_SUBMIT_ACTION = 'form-submit'
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_ACTION:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_ACTION:
            return {
                ...state,
                count: state.count - 1
            };

        case CHANGE_VALUE_TO_ADD_ACTION:
            return {
                ...state,
                valueToAdd: action.payload
            };

        case FORM_SUBMIT_ACTION:
            return {
                ...state,
                valueToAdd: 0,
                count: state.count + 1
            };

        default:
            return state

    }
};

function CounterPage({initialCount}) {
    // const { increment, decrement } = useCounter(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_ACTION
        })
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_ACTION
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch({
            type: CHANGE_VALUE_TO_ADD_ACTION,
            payload: value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        // setCount(count+1)
        // setValueToAdd(0)
        dispatch({
            type: FORM_SUBMIT_ACTION
        })
    }

    return (
        <Panel>
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input
                    onChange={handleChange}
                    value={state.valueToAdd || ""}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button>Add It</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;