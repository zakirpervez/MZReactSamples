import {useSelector} from "react-redux";

function CarValue() {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
       return data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        }).reduce((accumulator, car    ) => {
            return accumulator+car.cost;
        }, 0);
    });

    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>
}

export default CarValue;