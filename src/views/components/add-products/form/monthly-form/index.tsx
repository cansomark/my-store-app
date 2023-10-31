import { Autocomplete, Button, TextField } from "@mui/material"
import { Flex, FormFieldWrapper, THREE_COL_LAYOUT, TwoRowContainer } from "../../../shared/shared-style";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import UpdateIcon from '@mui/icons-material/Update';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, {useState, useEffect} from "react";
import { MonthlyTableContainer } from "./monthly-table-style";
import DataTable from "../../../common/table";
import monthlyData from "../../../../../sample-data/monthly-data";
import { MONTH_TEXT_LABELS, MonthList } from "../../../../../utils/form-utils";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface Props {
    onClear: boolean;
    formClear: ()=>void;
}

type Data = {
    Metric: string;
    "Month 1": string;
    "Month 2": string;
    "Month 3": string;
    "Month 4": string;
    "Month 5": string;
    "Month 6": string;
    "Month 7": string;
    "Month 8": string;
    "Month 9": string;
    Average: string;
    [key: string]: string;  // This is the index signature
  };

const MonthlyForm:React.FC<Props>=({onClear,formClear})=>{
    const [showTableContainer, setShowTableContainer]=useState(false)
    const [enableUpdate, setEnableupdate]=useState(false)
    const [showTable, setShowTable]=useState(false);
    const [monthList,setMonthList]=useState<string | null>(null)
    const [inputValue,setInputValue]=useState<number[]>([]);
    const [localDataList, setLocalDataList] = useState(monthlyData[0]);
    useEffect(()=>{
        if(onClear) {
            clearField()
        }
        formClear()
    },[onClear,formClear])

    const clearField=()=>{
        setMonthList(null);
        setInputValue([]);
        setShowTable(false);
        setShowTableContainer(false);   
        setEnableupdate(false)     
    }

    const handleOnUpdateClick = () => {
        if (monthList !== null) {
            const updatedDataList: Data[] = [...localDataList.data];
    
            updatedDataList.forEach((data, index) => {
                data[monthList] = `$${inputValue[index].toLocaleString()}`;
            });
    
            updateAverages(updatedDataList);
            const newLocalDataList = {
                headers: localDataList.headers,
                data: updatedDataList,
            };
            setLocalDataList(newLocalDataList);
        }
    };

    const updateAverages = (dataList: Data[]) => {
        dataList.forEach((data) => {
            const total = Object.keys(data)
                .filter((key) => key.startsWith("Month"))
                .reduce((acc, key) => acc + parseFloat(data[key].replace(/[$,]/g, "")), 0);           
            const average = (total / MonthList.length).toFixed(2);
            data.Average = `$${parseFloat(average).toLocaleString()}`;
        });
    };

    const handleOnChange=(value:string,index:number)=>{
        const newValue=[...inputValue];
        newValue[index]=parseFloat(value) || 0;
        setInputValue(newValue)
    }

    const handleOnAddClick=()=>{
        if(enableUpdate) {
            handleOnUpdateClick()
        }
        clearField()
        setShowTableContainer(true)
        setShowTable(true)            
    }

    const handleCancel=()=>{
        clearField()
        setShowTableContainer(true)
        setShowTable(true)  
    }

    const handleShowTable=()=>{
        setShowTable(prevShowTable=>!prevShowTable)
    }

    const getDataList=(data:{header:string,dataList:string[]})=>{
        if(data.header.startsWith("Month")) {
            setEnableupdate(true)
            setMonthList(data.header);
            const newInputValue=[...inputValue];
            
            data.dataList.forEach((_,index)=>{          
                const newDataList=data.dataList[index].replace(/[$,]/g,"")
                newInputValue[index]=parseFloat(newDataList)
                setInputValue(newInputValue)
           })
        }

    }


    return(
        <FormFieldWrapper>
            <THREE_COL_LAYOUT>
                <Autocomplete
                    disablePortal  
                    disabled={enableUpdate ? true : false}                 
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
                    {
                        enableUpdate &&
                        <Button variant="outlined" onClick={()=>{handleCancel()}} startIcon={<HighlightOffIcon />}>
                            Cancel
                        </Button>
                    }
                    <Button variant="contained" onClick={handleOnAddClick} startIcon={enableUpdate ? <UpdateIcon /> : <AddCircleOutlineIcon />}>
                        {
                            enableUpdate ?
                                "Update"
                            :
                                "ADD"
                        }                       
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
                            <DataTable headers={localDataList.headers} rows={localDataList.data} enableRowClick={true} getDataList={getDataList}/>
                        } 
                    </MonthlyTableContainer>
                </>
            }
            
        </FormFieldWrapper>
    )
}

export default MonthlyForm