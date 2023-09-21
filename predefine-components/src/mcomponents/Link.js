import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({to, children, mClassNames, activeClassName}) {
    const {navigate, currentPath} = useNavigation();

    const mClasses = classNames(
        'text-blue-500',
        mClassNames,
        currentPath === to && activeClassName
    )
    const handleAnchorClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return
        }
        event.preventDefault()
        navigate(to)
    }
    return <a href={to} onClick={handleAnchorClick} className={mClasses}>{children}</a>
}

export default Link;