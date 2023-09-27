import Table from "./Table";
import {useState} from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

function SortableTable(props) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const {headers, rows} = props;
    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null)
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updateHeaders = headers.map((col) => {
        if (!col.sortValue) {
            return col;
        }

        return {
            ...col,
            header: () => <th className="cursor-pointer hover:bg-gray-300" onClick={() => handleClick(col.label)}>
               <div className="flex items-center">
                   { getIcons(col.label, sortBy, sortOrder) }
                   { col.label }
               </div>
            </th>
        }
    });

    let sortedData = rows;
    if (sortBy && sortOrder) {
        const { sortValue } = headers.find((col) => col.label === sortBy);

        sortedData = [...rows].sort((item1, item2)=> {
            const itemValue1 = sortValue(item1);
            const itemValue2 = sortValue(item2);

            const reverseOrder = sortOrder === 'asc'? 1 : -1;

            if (typeof itemValue1 === 'string') {
                return itemValue1.localeCompare(itemValue2) * reverseOrder;
            } else {
                return (itemValue1 - itemValue2) * reverseOrder;
            }
        });
    }

    return (<div>
        <Table {...props} headers={updateHeaders} rows={sortedData}/>
    </div>);
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>;
    } else if (sortOrder === 'asc') {
        return <div><GoArrowUp/></div>;
    } else if (sortOrder === 'desc') {
        return <div><GoArrowDown/></div>;
    }
}

export default SortableTable;