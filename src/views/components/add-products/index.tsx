import React, {useState} from "react";
import { FormContainer, FormFieldContainer, FormHeader, FormTiTle, InstructionText, TwoRowContainer } from "../shared/shared-style";
import { Button } from "@mui/material";
import Clear from '@mui/icons-material/Clear';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DetailsForm from "./form/details-form";
import MonthlyForm from "./form/monthly-form";
import ContactChannel from "./form/contact-channel";
import ToolCost from "./form/tool-cost";
import ModalComponent from "../common/modal";
import CallOrigin from "./form/call-origin";
import pyramidData from "../../../sample-data/pyramid-data";
const AddComponent:React.FC=()=>{
    const [open, setOpen] = useState(false)
    const [clearField,setClearField]=useState(false);
    function handleGenerateButton(){
        setOpen(prevOpen => !prevOpen)
    }

    const handleOnClear=()=>{
        setClearField(true);
    }

    const handleFormClear=()=>{
        setClearField(false);
    }

    return(
       <FormContainer>
            <FormHeader>
                <FormTiTle>Pyramid Generator for Delivery Run Phase</FormTiTle>
                <InstructionText>
                    Cost Considertion, Volumetrics and Other Parameters
                </InstructionText>
            </FormHeader>            
            <FormFieldContainer>
                <DetailsForm onClear={clearField} formClear={handleFormClear} />
                <CallOrigin onClear={clearField} formClear={handleFormClear} />
                <MonthlyForm onClear={clearField} formClear={handleFormClear} />
                <ContactChannel onClear={clearField} formClear={handleFormClear} />
                <ToolCost onClear={clearField} formClear={handleFormClear} />
            </FormFieldContainer>
            <TwoRowContainer>
                <Button variant="outlined" onClick={handleOnClear} startIcon={<Clear />}>
                    Clear
                </Button>
                <Button variant="contained" onClick={handleGenerateButton} startIcon={<ModelTrainingIcon />}>
                    Generate
                </Button>
            </TwoRowContainer>
            <ModalComponent open={open} handleClose={handleGenerateButton} 
            headers={pyramidData[0].headers} rows={pyramidData[0].data} />
       </FormContainer> 
    )
}

export default AddComponent;