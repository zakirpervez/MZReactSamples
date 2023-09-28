import {useState} from "react";

function useSort({ headers, rows }) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortedColClick = (label) => {
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

    return { sortBy, sortOrder, sortedData, setSortedColClick}
}

export default useSort;