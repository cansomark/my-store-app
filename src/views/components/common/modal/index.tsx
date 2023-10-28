import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ModalBodyContainer } from "./modal.style";
import DataTable from "../table";

interface Header {
    propName: string;
    displayName: string;
}

interface DataRow {
    [key: string]: string;
}

interface Props {
    open:boolean,
    handleClose:(data:boolean)=>void;
    headers:Header[];
    rows:DataRow[]

}

const ModalComponent:React.FC<Props>=({open, handleClose, headers, rows})=>{
   
    return(
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBodyContainer>
               <DataTable headers={headers} rows={rows}/>
            </ModalBodyContainer>
           
        </Modal>
        </>
    )
}

export default ModalComponent;