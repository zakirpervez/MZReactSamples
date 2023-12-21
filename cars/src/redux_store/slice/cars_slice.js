import {createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        'searchTerm': '',
        'data': [],
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.name = action.payload;
        },
        addCar: (state, action) => {
            // Assumption is that action.payload is an object with a name and cost property.
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeCar: (state, action) => {
            // Assumption is that action.payload is an id.
            const id = action.payload;
            state.data = state.data.filter(car => car.id !== id);
        }
    }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;