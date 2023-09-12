import classNames from "classnames";

// const finalClassName = classNames('px-3', 'py-1.5', 'border');
// const finalClassName = classNames('px-3', 'py-1.5', 'border', {
//     'border-blue-600': true,
//     'text-yellow-500': false
// });
// console.log(finalClassName)

function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
    const classes = classNames('px-3 py-1.5 border flex item-center', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-900 text-white': success,
        'border-yellow-400 bg-yellow-500 text-white': warning,
        'border-red-400 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
    });
    return <button className={ classes }>{ children }</button>
}

Button.propTypes = {
    checkVariationValues: ({ primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger);

        if (count>1) {
            return Error('Only one type of button would be allowed {primary, secondary, success, warning, danger}');
        }
    }
}

export default Button;