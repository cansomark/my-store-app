import React,{useState, useEffect} from "react";
import { FormFieldWrapper, THREE_COL_LAYOUT } from "../../../shared/shared-style";
import { TextField, Autocomplete } from "@mui/material";
import { DELIVERY_APPROACH, Language } from "../../../../../utils/form-utils";
import { CSPR_MU } from "../../../../../utils/form-utils";
import { OPERATIONAL_WINDOWS_LOCATION } from "../../../../../utils/form-utils";

interface Props {
    onClear: boolean,
    formClear:()=>void
}

const DetailsForm:React.FC<Props>=({onClear,formClear})=>{
    const [deliveryApproach, setDeliveryApproach]=useState<string | null>(null);
    const [activityDescription, setActivityDescription]=useState<string>('');
    const [operationalLocation, setOperationalLocation]=useState<string | null>(null);
    const [customerPrimary, setCustomerPrimary]=useState<string | null>(null);
    const [documentLanguage, setDocumentLanguage]=useState<string | null>(null);

    useEffect(()=>{
        if(onClear) {
            setDeliveryApproach('')
            setActivityDescription('')
            setOperationalLocation('')
            setCustomerPrimary('')
            setDocumentLanguage('')
            formClear()
        }        
    },[onClear, formClear])

    return(
        <FormFieldWrapper>
            <THREE_COL_LAYOUT>            
                <Autocomplete
                    value={deliveryApproach}     
                    onChange={(event:any, newValue:string | null)=>{
                        setDeliveryApproach(newValue)
                    }}          
                    disablePortal
                    id="combo-box-demo"
                    options={DELIVERY_APPROACH}
                    renderInput={(params) => <TextField {...params} label="Delivery Approach" />}
                />
                <TextField
                    required
                    value={activityDescription}
                    onChange={(event)=>setActivityDescription(event.target.value)}  
                    id="outlined-required"
                    label="Activity Description"             
                />
                <Autocomplete
                    disablePortal
                    value={operationalLocation}
                    onChange={(event:any,newValue:string | null)=>{
                        setOperationalLocation(newValue)
                    }}
                    id="combo-box-demo"
                    options={OPERATIONAL_WINDOWS_LOCATION}
                    renderInput={(params) => <TextField {...params} label="Operational Windows for Location" />}
                />
                <Autocomplete
                    disablePortal
                    value={customerPrimary}
                    onChange={(event:any,newValue:string | null)=>{
                        setCustomerPrimary(newValue);
                    }}
                    id="combo-box-demo"
                    options={CSPR_MU}
                    renderInput={(params) => <TextField {...params} label="Customer Primary Business Regions" />}
                />                
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={documentLanguage}
                    onChange={(event:any,newValue:string|null)=>{
                        setDocumentLanguage(newValue)
                    }}
                    options={Language}
                    renderInput={(params) => <TextField {...params} label="Document the Language" />}
                /> 
             </THREE_COL_LAYOUT>
         </FormFieldWrapper> 
    )
}

export default DetailsForm;