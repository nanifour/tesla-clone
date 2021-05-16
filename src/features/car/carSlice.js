import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}

}
)


//selecting cars or slices and return whole array
export const selectCars = state => state.car.cars


export default carSlice.reducer




