import { Autocomplete, Button, TextField } from "@mui/material"
import { Flex, FormFieldWrapper, THREE_COL_LAYOUT, TwoRowContainer } from "../../../shared/shared-style";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, {useState} from "react";
import { MonthlyTableContainer } from "./monthly-table-style";
import DataTable from "../../../common/table";
import monthlyData from "../../../../../sample-data/monthly-data";
import { MonthList } from "../../../../../utils/form-utils";
const MonthlyForm:React.FC=()=>{
    const [showTableContainer, setShowTableContainer]=useState(false)
    const [showTable, setShowTable]=useState(false);

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
                    options={MonthList}
                    renderInput={(params) => <TextField {...params} label="Month" />}
                    className="three-col-span month-dropdown"
                />

                <>
                    <TextField
                        required
                        id="outlined-required"
                        label="Number of Users"                                 
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Contracts Per Month Per Users"             
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Contracts Per Month"             
                    />
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