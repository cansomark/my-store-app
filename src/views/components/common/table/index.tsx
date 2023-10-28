import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

interface Header {
    propName: string;
    displayName: string;
}

interface DataRow {
    [key: string]: string;
}

interface Props {
    headers: Header[];
    rows: DataRow[];
}

const DataTable:React.FC<Props>=({headers,rows})=>{
    return(
        <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell align="center" key={header.propName}>
                                {header.displayName}
                            </TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {headers.map((header) => (
                                    <TableCell key={header.propName}>
                                        {row[header.propName]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default DataTable;