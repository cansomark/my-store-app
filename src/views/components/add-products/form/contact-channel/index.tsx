import { TextField } from "@mui/material";
import { FormFieldWrapper, MiniBoxShadow, TWO_COL_LAYOUT, TWO_NARROW_COL_LAYOUT } from "../../../shared/shared-style";
import React,{useState,useEffect} from "react";
import { ContactsSummary } from "./contact-channel.style";
import { CONTACT_LABELS } from "../../../../../utils/form-utils";

interface Props {
    onClear:boolean;
    formClear:()=>void;
}

const ContactChannel:React.FC<Props>=({onClear,formClear})=>{
    const [inputValue, setInputValue]=useState<string[]>([]);
    const [averageTalkTime, setAverateTalkTime]=useState<string>('');
    const [talkTimeLabel,setTalkTimeLabel]=useState<string>('');
    useEffect(()=>{
        if(onClear) {
            setInputValue([])
            setAverateTalkTime('')
            setTalkTimeLabel('');

        }
    },[onClear,formClear])

    const handleOnChange =(index:number, value:string)=>{
        const newValue =[...inputValue];
        newValue[index] = value || '';
        setInputValue(newValue)
    };

    const handleAverageCall=(value:string)=>{
        setAverateTalkTime(value || '')
        setTalkTimeLabel(value.replace(' Min',''))
    }

    const handleOnBlur=(index:number)=>{
        const value=inputValue[index];
        if(value){
            if(!value.endsWith("%")) {
                const newValue=`${value}%`
                handleOnChange(index,newValue)
            }
        }
    }

    const handleOnFocus=(index:number)=>{
        const value=inputValue[index];
        if(value) {
            handleOnChange(index, value.replace("%",""));
        }
    }

    const handleOnBlurATT=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value=event.target.value;
        if(value) {
            if(!value.endsWith('Min')) {
                const newValue=`${value} Min`
                handleAverageCall(newValue)
            }
        }        
    }

    const handleOnFoucusATT=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const value=event.target.value;
        const newValue=value.replace(' Min','')
        handleAverageCall(newValue)
    }

    const totalContacts=inputValue.reduce((acc,curr) => acc + parseFloat(curr), 0);
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
                                value={inputValue[index] || ""}
                                onChange={(e)=> handleOnChange(index, e.target.value)}     
                                onBlur={()=>handleOnBlur(index)}   
                                onFocus={()=>handleOnFocus(index)}                                         
                            />
                        ))
                    }
                    <TextField                            
                            id="outlined-required"
                            label="Average Talk Time"  
                            value={averageTalkTime || ''} 
                            onChange={(e)=>handleAverageCall(e.target.value)} 
                            onBlur={handleOnBlurATT}
                            onFocus={handleOnFoucusATT}
                    />
                </TWO_COL_LAYOUT>
                <MiniBoxShadow>
                    <ContactsSummary>
                        <span className="summary-label">Total Contact:</span>
                        <span className={`data-label`}>{totalContacts}%</span>
                        <span className="summary-label">Average Talk Time:</span>
                        <span className="data-label">{parseFloat(talkTimeLabel) || 0} Min</span>
                    </ContactsSummary>
                </MiniBoxShadow>
            </TWO_NARROW_COL_LAYOUT>
        </FormFieldWrapper>
    )
}

export default ContactChannel;