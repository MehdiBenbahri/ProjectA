import { createColumnHelper } from "@tanstack/react-table"

export type Product = {
    id: number,
    name: string,
    description: string,
    ref: string,
    price: number,
    quantity: number,
    unit_id: number,
    pack_id: number
}

const columnHelper = createColumnHelper<Product>();

export const ProductColumn = [
    columnHelper.accessor('id', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('name', {
        cell: info => <p className="w-[20rem] truncate">{info.getValue()}</p>,
        header: () => <span>Nom</span>,
    }),
    columnHelper.accessor('description', {
        cell: info => <p className="w-[30rem] truncate">{info.getValue()}</p>,
        header: () => <span>Description</span>,
    }),
    columnHelper.accessor('ref', {
        cell: info => <p>{info.getValue()}</p>,
        header: () => <span>Ref</span>,
    }),
    columnHelper.accessor('price', {
        cell: info => <p>{info.getValue()}</p>,
        header: () => <span>Prix</span>,
    }),
    columnHelper.accessor('quantity', {
        cell: info => <p>{info.getValue()}</p>,
        header: () => <span>Quantité</span>,
    }),
    columnHelper.accessor('unit_id', {
        cell: info => <p>{info.getValue()}</p>,
        header: () => <span>Unité</span>,
    }),
    columnHelper.accessor('pack_id', {
        cell: info => <p>{info.getValue()}</p>,
        header: () => <span>Pack</span>,
    })
]