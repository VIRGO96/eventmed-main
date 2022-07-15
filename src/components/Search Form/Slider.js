import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Tooltip } from "@mui/material";


export default function RangeSlider({ priceRange, setPriceRange }) {
  //const [value, setValue] = React.useState([20, 30]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  return (
    <>
      <Box className="box-slider" sx={{ width: 300 }}>
        <Tooltip title="Make sure to provide both minimum and maximum values">
          <Slider
            sx={{ display: "flex", justifyContent: "center" }}
            getAriaLabel={() => "Price range"}
            color="secondary"
            value={priceRange === "" ? [0, 1000] : priceRange}
            onChange={handleChange}
            min={0}
            max={1500}
            step={100}
            valueLabelDisplay="auto"
            disableSwap={true}
          />
        </Tooltip>

        <div className="d-flex">
          <strong>{priceRange?.[0]}</strong>
          <strong className="ms-auto">{priceRange?.[1]}</strong>
        </div>
      </Box>
    </>
  );
}
