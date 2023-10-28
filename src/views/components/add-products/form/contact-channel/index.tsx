import { TextField } from "@mui/material";
import { FormFieldWrapper, MiniBoxShadow, TWO_COL_LAYOUT, TWO_NARROW_COL_LAYOUT } from "../../../shared/shared-style";
import React,{useState} from "react";
import { ContactsSummary } from "./contact-channel.style";
import { CONTACT_LABELS } from "../../../../../utils/form-utils";

const ContactChannel:React.FC=()=>{
    const [inputValue, setInputValue]=useState<number[]>([]);
    const [averageTalkTime, setAverateTalkTime]=useState<number>(0);

    const handleOnChange =(index:number, value:string)=>{
        const newValue =[...inputValue];
        newValue[index] = parseFloat(value) || 0;
        setInputValue(newValue)
    };

    const handleAverageCall=(value:string)=>{
        setAverateTalkTime(parseFloat(value)||0)
    }

    const handleOnBlur=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value=event.target.value;
        if(!value.endsWith('%') && value){
            event.target.value=`${value}%`
        }
    }

    const handleOnFocus=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value=event.target.value;
        event.target.value=value.replace('%','')
    }

    const handleOnBlurATT=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value=event.target.value;
        if(!value.endsWith('Min') && value) {
            event.target.value=`${value} Min`
        }
    }

    const handleOnFoucusATT=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value=event.target.value;
        event.target.value=value.replace(' Min','')
    }

    const totalContacts=inputValue.reduce((acc,curr) => acc + curr, 0);
    return(
        <FormFieldWrapper>
            <TWO_NARROW_COL_LAYOUT>
                <TWO_COL_LAYOUT>
                    {
                        CONTACT_LABELS.map((label,index)=>(
                            <TextField
                                key={index}
                                id="outlined-required"
                                label={label}  
                                onChange={(e)=> handleOnChange(index, e.target.value)}     
                                onBlur={handleOnBlur}   
                                onFocus={handleOnFocus}                                         
                            />
                        ))
                    }
                    <TextField                            
                            id="outlined-required"
                            label="Average Talk Time"   
                            onChange={(e)=>handleAverageCall(e.target.value)} 
                            onBlur={handleOnBlurATT}
                            onFocus={handleOnFoucusATT}
                    />
                </TWO_COL_LAYOUT>
                <MiniBoxShadow>
                    <ContactsSummary>
                        <span className="summary-label">Total Contact:</span>
                        <span className="data-label">{totalContacts}%</span>
                        <span className="summary-label">Average Talk Time:</span>
                        <span className="data-label">{averageTalkTime} Min</span>
                    </ContactsSummary>
                </MiniBoxShadow>
            </TWO_NARROW_COL_LAYOUT>
        </FormFieldWrapper>
    )
}

export default ContactChannel;