import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: ["model S", "model 3", "model X", "model Y"]

}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer