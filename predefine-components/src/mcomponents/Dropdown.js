import {useState, useEffect, useRef} from "react";
import {GoChevronDown, GoChevronUp} from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ dropDownId, options, value, onChange }) {
    const divEl = useRef()
    const [isOpen, isOpened] = useState(false);
    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            };
            if (!divEl.current.contains(event.target)) {
                isOpened(false);
            }
        }
        document.addEventListener('click', handler, true);
        // Cleanup function.
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);
    const handleClick = () => {
        isOpened((isCurrentOpen) => !isCurrentOpen);
    }

    window.timeTwo = performance.now();
    const handleItemClick = (option) => {
        window.timeOne = performance.now();
        isOpened(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div  className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleItemClick(option)}>{option.label}</div>
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={() => handleClick()}>{value?.label || 'Select...'} {isOpen ? <GoChevronUp className="text-lg"/> : <GoChevronDown className="text-lg"/>}</Panel>
            {isOpen &&  <Panel className="absolute top-full">{ renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;