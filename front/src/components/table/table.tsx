import React from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, type SortingState } from "@tanstack/react-table";
import Pagination from './table-pagination';
import TableHead from './table-head';
import TableBody from './table-body';


const Table = ({_data, _columns}) => {

    const [data,] = React.useState(() => [..._data]);
    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data: data,
        columns: _columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
          sorting,
        },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
    });


    return (
      <div>
        <table className='table table-auto table-background'>
          <TableHead table={table} />
          <TableBody table={table} />
        </table>
        <div className='flex justify-end items-center'>
          <Pagination table={table} />
        </div>
      </div>
    )
}

export default Table;