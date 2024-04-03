import { ComponentProps } from "react";

interface TableRowsProps extends ComponentProps<'tr'> { }

export default function TableRows(props: TableRowsProps) {
    return (
        <tr className="border-b border-white/10 hover:bg-white/5"
            {...props}
        />
    )
}