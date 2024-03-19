/* eslint-disable react/jsx-key */
import PriceOption from "./PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to locker rooms",
                "Access to weightlifting area",
                "Access to locker rooms"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "$50",
            "features": [
                "Access to all Basic Membership features",
                "Group fitness classes",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$80",
            "features": [
                "Access to all Standard Membership features",
                "Personal trainer sessions (2 per month)",
                "Towel service",
                "Personal trainer sessions (2 per month)",
                "Towel service"
            ]
        },
        {
            "id": 4,
            "name": "Elite Membership",
            "price": "$12",
            "features": [
                "Access to all Premium Membership features",
                "Unlimited personal trainer sessions",
                "Nutritional guidance"
            ]
        }
    ]
    return (
        <div>
            <div className="grid grid-cols-3 gap-10 container mx-auto mt-10">
                {
                    priceOptions.map(option => <PriceOption option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;