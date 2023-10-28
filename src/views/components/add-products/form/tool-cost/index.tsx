import { TextField } from "@mui/material";
import React from "react";
import { FormFieldWrapper, TWO_COL_LAYOUT } from "../../../shared/shared-style";

const ToolCost:React.FC=()=>{
    return(
        <FormFieldWrapper>
            <TWO_COL_LAYOUT>
                <TextField
                    required
                    id="outlined-required"
                    label="SLA"             
                />            
                <TextField
                    required
                    id="outlined-required"
                    label="My Wizard"             
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Service Now"             
                />
                <TextField
                    required
                    id="Other"
                    label="Other"             
                />
            </TWO_COL_LAYOUT>
        </FormFieldWrapper>
    )
}

export default ToolCost;