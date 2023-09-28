import Table from "./Table";
import {GoArrowUp, GoArrowDown} from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const {headers, rows} = props;
    const {sortBy, sortOrder, sortedData, setSortedColClick} = useSort({headers, rows});

    const updateHeaders = headers.map((col) => {
        if (!col.sortValue) {
            return col;
        }

        return {
            ...col,
            header: () => <th className="cursor-pointer hover:bg-gray-300" onClick={() => setSortedColClick(col.label)}>
                <div className="flex items-center">
                    {getIcons(col.label, sortBy, sortOrder)}
                    {col.label}
                </div>
            </th>
        }
    });

    return (<div>
        <Table {...props} headers={updateHeaders} rows={sortedData}/>
    </div>);
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>;
    } else if (sortOrder === 'asc') {
        return <div><GoArrowUp/></div>;
    } else if (sortOrder === 'desc') {
        return <div><GoArrowDown/></div>;
    }
}

export default SortableTable;