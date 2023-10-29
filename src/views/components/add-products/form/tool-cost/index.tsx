import { TextField } from "@mui/material";
import React, {useState,useEffect} from "react";
import { FormFieldWrapper, TWO_COL_LAYOUT } from "../../../shared/shared-style";
import { TOOL_COST_LABELS } from "../../../../../utils/form-utils";

interface Props {
    onClear:boolean;
    formClear:()=>void;
}

const ToolCost:React.FC<Props>=({onClear,formClear})=>{
    const [inputValue,setInputValue]=useState<string[]>([]);

    useEffect(()=>{
        if(onClear) {
            setInputValue([]);
            formClear();
        }
    },[onClear,formClear])

    const handleOnChange=(value:string,index:number)=>{
        const newValue=[...inputValue];
        newValue[index]=value || '';
        setInputValue(newValue);
    }
    return(
        <FormFieldWrapper>
            <TWO_COL_LAYOUT>
                {
                    TOOL_COST_LABELS.map((field,index)=>(
                        <TextField
                            required
                            key={index}
                            value={inputValue[index] || ''}
                            onChange={(e)=>handleOnChange(e.target.value,index)}
                            id="outlined-required"
                            label={field}             
                        />   
                    ))
                }
            </TWO_COL_LAYOUT>
        </FormFieldWrapper>
    )
}

export default ToolCost;