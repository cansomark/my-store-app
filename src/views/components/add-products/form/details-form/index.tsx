import React from "react";
import { FormContainer, FormFieldContainer, FormFieldWrapper, FormHeader, FormTiTle, InstructionText, THREE_COL_LAYOUT, TwoRowContainer } from "../../../shared/shared-style";
import { TextField, Autocomplete } from "@mui/material";
import { DELIVERY_APPROACH, Language } from "../../../../../utils/form-utils";
import { CSPR_MU } from "../../../../../utils/form-utils";
import { OPERATIONAL_WINDOWS_LOCATION } from "../../../../../utils/form-utils";
const DetailsForm:React.FC=()=>{
    return(
        <FormFieldWrapper>
            <THREE_COL_LAYOUT>            
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={DELIVERY_APPROACH}
                    renderInput={(params) => <TextField {...params} label="Delivery Approach" />}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Activity Description"             
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={OPERATIONAL_WINDOWS_LOCATION}
                    renderInput={(params) => <TextField {...params} label="Operational Windows for Location" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={CSPR_MU}
                    renderInput={(params) => <TextField {...params} label="Customer Primary Business Regions" />}
                />                
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Language}
                    renderInput={(params) => <TextField {...params} label="Document the Language" />}
                /> 
             </THREE_COL_LAYOUT>
         </FormFieldWrapper> 
    )
}

export default DetailsForm;