function Table({rows, headers, keyFn}) {
    const renderHeaders = headers.map((col) => {
        return <th key={col.label}>{col.label}</th>
    })

    const renderRowData = rows.map((rowData) => {
        const renderCells = headers.map((col) => {
            return  <td className="p-3">{col.render(rowData)}</td>
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