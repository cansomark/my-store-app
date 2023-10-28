import React, {useState} from "react";
import { FormContainer, FormFieldContainer, FormHeader, FormTiTle, InstructionText, TwoRowContainer } from "../shared/shared-style";
import { Button } from "@mui/material";
import Clear from '@mui/icons-material/Clear';
import SaveAs from '@mui/icons-material/SaveAs';
import DetailsForm from "./form/details-form";
import MonthlyForm from "./form/monthly-form";
import ContactChannel from "./form/contact-channel";
import ToolCost from "./form/tool-cost";
import ModalComponent from "../common/modal";
import CallOrigin from "./form/call-origin";
import pyramidData from "../../../sample-data/pyramid-data";
const AddComponent:React.FC=()=>{
    const [open, setOpen] = useState(false)
    function handleGenerateButton(){
        setOpen(prevOpen => !prevOpen)
    }

    return(
       <FormContainer>
            <FormHeader>
                <FormTiTle>Title</FormTiTle>
                <InstructionText>
                    Short Description
                </InstructionText>
            </FormHeader>            
            <FormFieldContainer>
                <DetailsForm />  
                <CallOrigin />
                <MonthlyForm />
                <ContactChannel />
                <ToolCost />
            </FormFieldContainer>
            <TwoRowContainer>
                <Button variant="outlined" startIcon={<Clear />}>
                    Clear
                </Button>
                <Button variant="contained" onClick={handleGenerateButton} startIcon={<SaveAs />}>
                    Generate Pyramid Model
                </Button>
            </TwoRowContainer>
            <ModalComponent open={open} handleClose={handleGenerateButton} 
            headers={pyramidData[0].headers} rows={pyramidData[0].data} />
       </FormContainer> 
    )
}

export default AddComponent;