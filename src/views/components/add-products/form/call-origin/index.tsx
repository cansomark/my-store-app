import React, {useState,useEffect} from 'react';
import { TextField } from "@mui/material";
import { CallOriginField } from '../../../../../utils/form-utils';
import { FormFieldWrapper, TWO_COL_LAYOUT } from '../../../shared/shared-style';
import { TotalOriginContainer } from './call-origin.style';

interface Props {
    onClear: boolean;
    formClear:()=>void;
}

const CallOrigin:React.FC<Props>=({onClear,formClear})=>{
    const [inputValue, setInputValue]=useState<string[]>([]);

    useEffect(()=>{        
        if(onClear) {
            setInputValue([]);         
            formClear();
        }
    },[onClear,formClear])

    const handleOnChange=(value:string, index:number)=>{
        const newValue=[...inputValue];
        newValue[index]=value;
        setInputValue(newValue);
    }

    const handlerOnBlue=(index:number) => {
        const newValue=inputValue[index];
        if(newValue)
        {
            if(!newValue.toString().endsWith('%'))
            {
                const updatedValue = `${newValue}%`
                handleOnChange(updatedValue,index)
            }
        }
    }

    const handleOnFocus=(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, index:number) =>{       
        const value=inputValue[index];
        if(value)
        {
            handleOnChange(value.replace('%',''),index)
        }
    }

    const total=inputValue.reduce((acc,cur)=> acc + parseFloat(cur),0);
    return(
        <FormFieldWrapper>           
            <TWO_COL_LAYOUT>
            {
                CallOriginField.map((label,index)=>(
                    <TextField
                        key={index}
                        id="outlined-required"
                        value={inputValue[index] || ''} 
                        label={label}                         
                        onChange={(e)=>handleOnChange(e.target.value,index)}   
                        onBlur={()=>handlerOnBlue(index)} 
                        onFocus={(e)=>handleOnFocus(e,index)}                                             
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