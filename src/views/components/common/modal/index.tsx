import React, { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LoadingContainer, ModalBodyContainer } from "./modal.style";
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
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        if (open) {
            setShowTable(false);
            const timer = setTimeout(() => {
                setShowTable(true);
            }, 4000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [open]);

    return(
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBodyContainer>
                {
                    showTable ?
                        <DataTable headers={headers} rows={rows} enableRowClick={false} />
                    :                    
                    <LoadingContainer>
                        <span className="loader"></span>
                        <span className="loader-label">Please Wait...</span>
                    </LoadingContainer>
                }   
            </ModalBodyContainer>
           
        </Modal>
        </>
    )
}

export default ModalComponent;