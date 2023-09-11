import PropTypes from "prop-types";



function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
    return <button className={ "bg-blue-300" }>{ children }</button>
}

Button.propTypes = {
    checkVariationValues: ({ primary, secondary, success, warning, danger, outline, rounded}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)
            + Number(!!outline)
            + Number(!!rounded);

        if (count>1) {
            return Error('Only one type of button would be allowed {primary, secondary, success, warning, danger, outline, rounded}');
        }
    }
}

export default Button;