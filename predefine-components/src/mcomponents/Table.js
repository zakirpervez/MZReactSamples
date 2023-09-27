import {Fragment} from "react";

function  Table({rows, headers, keyFn}) {
    const renderHeaders = headers.map((col) => {
        if (col.header) {
            return <Fragment key={col.label}>{col.header()}</Fragment>
        }
        return <th key={col.label}>{col.label}</th>
    })

    const renderRowData = rows.map((rowData) => {
        const renderCells = headers.map((col) => {
            return  <td className="p-2" key={col.label}>{col.render(rowData)}</td>
        })

        return (<tr key={keyFn(rowData)} className="border-b">
            {renderCells}
        </tr>)
    });

    return <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b">
              {renderHeaders}
          </tr>
        </thead>
        <tbody>
            {renderRowData}
        </tbody>
    </table>
}

export default Table;