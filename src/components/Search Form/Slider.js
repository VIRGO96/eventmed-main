import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}
export default function RangeSlider({ priceRange, setPriceRange }) {
  const [value, setValue] = React.useState([20, 30]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  console.log({ priceRange });
  return (
    <>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={priceRange}
          onChange={handleChange}
          min={0}
          max={10000}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="d-flex">
        <strong>{priceRange?.[0]}</strong>
        <strong className="ms-auto">{priceRange?.[1]}</strong>
      </div>
    </>
  );
}
