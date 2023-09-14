import {useState} from "react";
import {hover} from "@testing-library/user-event/dist/hover";
import {GoChevronDown, GoChevronUp} from "react-icons/go";

function Dropdown({ options, value, onChange }) {
    const [isOpen, isOpened] = useState(false);
    const handleClick = () => {
        isOpened((isCurrentOpen) => !isCurrentOpen);
    }
    const handleItemClick = (option) => {
        isOpened(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div  className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleItemClick(option)}>{option.label}</div>
    });

    return (
        <div className="w-48 relative">
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={() => handleClick()}>{value?.label || 'Select...'} {isOpen ? <GoChevronUp className="text-lg"/> : <GoChevronDown className="text-lg"/>}</div>
            {isOpen &&  <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{ renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;