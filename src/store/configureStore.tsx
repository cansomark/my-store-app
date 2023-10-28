import { configureStore } from "@reduxjs/toolkit";
const emptyReducer=(state={})=>state;

function store() {
    return configureStore({
        reducer:{
            empty:emptyReducer
        }
    })
}

export default store;
