import React, {useState} from 'react';
import { TextField } from "@mui/material";
import { CallOriginField } from '../../../../../utils/form-utils';
import { FormFieldWrapper, TWO_COL_LAYOUT } from '../../../shared/shared-style';
import { TotalOriginContainer } from './call-origin.style';
const CallOrigin:React.FC=()=>{
    const [inputValue, setInputValue]=useState<number[]>([]);

    const handleOnChange=(value:string, index:number)=>{
        const newValue=[...inputValue];
        newValue[index]=parseFloat(value) || 0;
        setInputValue(newValue);
    }

    const handlerOnBlue=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, index:number) => {
        const newValue=event.target.value;
        if(!newValue.endsWith('%') && newValue)
        {
            event.target.value = `${newValue}%`
        }
    }

    const handleOnFocus=(event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const value=event.target.value;
        event.target.value=value.replace('%','');
    }

    const total=inputValue.reduce((acc,cur)=> acc + cur,0);
    return(
        <FormFieldWrapper>
            <TWO_COL_LAYOUT>
            {
                CallOriginField.map((label,index)=>(
                    <TextField
                        key={index}
                        id="outlined-required"
                        label={label}  
                        onChange={(e)=>handleOnChange(e.target.value,index)}   
                        onBlur={(e)=>handlerOnBlue(e,index)} 
                        onFocus={handleOnFocus}                                             
                    />
                ))
            }
            </TWO_COL_LAYOUT>
            <TotalOriginContainer>
             <span className="total-label">Total: {total}%</span>
            </TotalOriginContainer>            
        </FormFieldWrapper>
    )
}

export default CallOrigin;