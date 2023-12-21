import {useDispatch, useSelector} from "react-redux";
import {removeCar} from "../redux_store";
import "../styles.css";
import "bulma/css/bulma.css";


function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector((state) => {
        return state.cars.data;
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        );
    });

    console.log(cars);
    return (
        <div className="car-list">
            { renderedCars }
            <hr />
        </div>
    );
}

export default CarList;