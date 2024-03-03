import {flexRender} from "@tanstack/react-table";

const TableHead = ({table}) => {
    return (
        <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th key={header.id}>
                        {header.isPlaceholder ? null : (
                        <div
                            {...{
                            className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                            onClick: header.column.getToggleSortingHandler(),
                            }}
                        >
                            {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                            )}
                            {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                            }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        )}
                    </th>
                ))}
                </tr>
            ))}
        </thead>
    )
}
export default TableHead;