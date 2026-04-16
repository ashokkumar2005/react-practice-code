import { useState } from "react";

function Use() {
  const [color, setColor] = useState("Red");
  const [car, setCar] = useState({
    Model: "BMW M5",
    Year: 2025,
    Color: "black",
    Owner: "Ashok",
    Booking: true,
  });

  const updateCar = () => {
    setCar((previousState) => ({
      ...previousState,
      Color: "white", 
    }));
  };

  return (
    <>
      <h2>Car Model</h2>
      <button onClick={updateCar}>Update Car</button>
      <h2>Color is {color}</h2>
      <button onClick={() => setColor("blue")}>Change Color</button>
      
      {/* Display car details */}
      <h3>{car.Model}</h3>
      <p>Color: {car.Color}</p>
      <p>Owner: {car.Owner}</p>
    </>
  );
}

export default Use;