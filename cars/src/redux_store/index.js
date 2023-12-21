import {configureStore} from "@reduxjs/toolkit";
import {carsReducer, addCar, removeCar, changeSearchTerm} from "./slice/cars_slice";
import {formReducer, changeName, changeCost} from "./slice/form_slice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    },
});

export {addCar, removeCar, changeSearchTerm, changeName, changeCost};
export default store;