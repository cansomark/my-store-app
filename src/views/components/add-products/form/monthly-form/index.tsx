import { Autocomplete, Button, TextField } from "@mui/material"
import { Flex, FormFieldWrapper, THREE_COL_LAYOUT, TwoRowContainer } from "../../../shared/shared-style";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, {useState, useEffect} from "react";
import { MonthlyTableContainer } from "./monthly-table-style";
import DataTable from "../../../common/table";
import monthlyData from "../../../../../sample-data/monthly-data";
import { MONTH_TEXT_LABELS, MonthList } from "../../../../../utils/form-utils";

interface Props {
    onClear: boolean;
    formClear: ()=>void;
}

const MonthlyForm:React.FC<Props>=({onClear,formClear})=>{
    const [showTableContainer, setShowTableContainer]=useState(false)
    const [showTable, setShowTable]=useState(false);
    const [monthList,setMonthList]=useState<string | null>(null)
    const [inputValue,setInputValue]=useState<number[]>([]);
    useEffect(()=>{
        if(onClear) {
            setMonthList(null);
            setInputValue([]);
            setShowTable(false);
            setShowTableContainer(false);
        }
        formClear()
    },[onClear,formClear])

    const handleOnChange=(value:string,index:number)=>{
        const newValue=[...inputValue];
        newValue[index]=parseFloat(value) || 0;
        setInputValue(newValue)
    }

    const handleOnAddClick=()=>{
        setShowTableContainer(true)
        setShowTable(true)
    }

    const handleShowTable=()=>{
        setShowTable(prevShowTable=>!prevShowTable)
    }


    return(
        <FormFieldWrapper>
            <THREE_COL_LAYOUT>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={monthList}
                    onChange={(event:any,newValue:string | null)=>{
                        setMonthList(newValue)
                    }}
                    options={MonthList}
                    renderInput={(params) => <TextField {...params} label="Month" />}
                    className="three-col-span month-dropdown"
                />

                <>
                {
                    MONTH_TEXT_LABELS.map((field,index)=>(
                        <TextField
                            key={index}
                            required
                            value={inputValue[index] || ''}
                            onChange={(e)=>handleOnChange(e.target.value,index)}
                            id="outlined-required"
                            label={field}                                 
                        />
                    ))
                }
                </>
            </THREE_COL_LAYOUT>
            <Flex>
                <TwoRowContainer>
                    <Button variant="contained" onClick={handleOnAddClick} startIcon={<AddCircleOutlineIcon />}>
                        ADD
                    </Button>
                </TwoRowContainer>   
            </Flex>  
            {
                showTableContainer &&
                <>                         
                    <MonthlyTableContainer>
                        <Button variant="text" onClick={handleShowTable} className={`${showTable ? "red-text" : "green-text" }`} 
                        startIcon={showTable ? <VisibilityOffIcon /> : <VisibilityIcon />}>
                            {
                                showTable ? "Hide Table" : "Show Table"
                            }
                        </Button> 
                        {
                            showTable &&
                            <DataTable headers={monthlyData[0].headers} rows={monthlyData[0].data}/>
                        } 
                    </MonthlyTableContainer>
                </>
            }
            
        </FormFieldWrapper>
    )
}

export default MonthlyForm