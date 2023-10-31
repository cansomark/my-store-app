import React, {useState} from 'react';
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
    enableRowClick: boolean;
    getDataList?:(data:{header:string,dataList:string[]})=>void;
}

const DataTable:React.FC<Props>=({...props})=>{
    const [columnHover,setColumnHover]=useState<number | null>(null);

    const handleRowClick=(colIndex:number)=>{
        const columnName = props.headers[colIndex].propName;
        const columnData = props.rows.map(row => row[columnName]);
        if(props.getDataList) {
            props.getDataList({
                header:columnName,
                dataList:columnData
            })
        }
    }

    return(
        <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow className='table-header'>
                        {props.headers.map((header,index) => (
                           <TableCell 
                                align="center" className={`${index===0 ? "hidden" : ""}`} 
                                key={header.propName}
                                onMouseEnter={()=>setColumnHover(index)}
                                onMouseLeave={()=>setColumnHover(null)}
                            >
                                {header.displayName}
                            </TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map((row, rowIndex) => (
                            <TableRow key={rowIndex} className={`table-data ${(props.enableRowClick && columnHover) ? "column-hover-" + columnHover: ""} ${props.enableRowClick ? "hover-light-blue" : ""}`}>
                                {props.headers.map((header,colIndex) => (
                                    <TableCell key={header.propName}
                                      onClick={props.enableRowClick ? ()=>handleRowClick(colIndex) : undefined}
                                      align={row[header.propName][0] === '$' ? 'right' : 'left'}
                                      className={`${props.enableRowClick ? 'cursor-pointer' :''} column-${colIndex}`}
                                      onMouseEnter={()=>setColumnHover(colIndex)}
                                      onMouseLeave={()=>setColumnHover(null)}
                                    >
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