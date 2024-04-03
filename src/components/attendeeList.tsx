import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from "lucide-react"
import IconButton from "./iconButton"
import Table from "./table/table"
import TableHeader from "./table/tableHeader"
import TableCells from "./table/tableCells"
import TableRows from "./table/tableRows"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendee"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export default function AttendeeList() {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    const TotalPages = Math.ceil(attendees.length / 10)


    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()

    }

    function goToNextPage(){
        setPage(page + 1)
    }

    function goToPreviousPage(){
        setPage(page - 1)
    }

    function goToFirstPage(){
        setPage(1)
    }

    function goToLastPage(){
        setPage(TotalPages)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input
                        className='bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0'
                        type="text"
                        placeholder="Buscar participantes..."
                        onChange={onSearchInputChanged}
                    />
                </div>
            </div>


            <Table>
                <thead>
                    <tr className="border-b border-white/10">
                        <TableHeader style={{ width: 48 }}>
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data da inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {attendees.slice((page - 1) * 10,page * 10).map((attendee) => {
                        return (
                            <TableRows key={attendee.id}>
                                <TableCells>
                                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 " />
                                </TableCells>
                                <TableCells>{attendee.id}</TableCells>
                                <TableCells>
                                    <div className="flex flex-col gap-1 ">
                                        <span className="font-semibold text-white">{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCells>
                                <TableCells>{dayjs().to(attendee.createdAt)}</TableCells>
                                <TableCells>{dayjs().to(attendee.checkedinAt)}</TableCells>
                                <TableCells>
                                    <IconButton transparent className="bg-black/20 border border-white/10 rounded-md p-1.5 hover:bg-black/5">
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </TableCells>
                            </TableRows>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCells colSpan={3}>
                            Showing 10 of {attendees.length} items
                        </TableCells>
                        <TableCells colSpan={3} className="text-right">
                            <div className="inline-flex items-center gap-8 ">
                                <span>Page {page} of {TotalPages}</span>

                                <div className="flex gap-1.5 ">
                                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={page === TotalPages}>
                                        <ChevronRight className="size-4"/>
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={page === TotalPages}>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCells>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}