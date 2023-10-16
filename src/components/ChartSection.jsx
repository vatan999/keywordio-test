import { Box, Switch, Typography } from "@mui/material";
import Chart from "./PieChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import ChartData from "./ChartData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ChartSection = () => {
  const [checked, setChecked] = useState(true);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const selectHandleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box
        width={"1200px"}
        margin={"20px"}
        borderRadius={"8px"}
        boxShadow={"0 0 0 1px #ddd"}
        sx={{ display: "flex", flexDirection: "column" }}
        position={"relative"}
      >
        <Box
          sx={{
            borderBottom: "1px solid #ddd",
            display: "flex",
            padding: "2px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgb(90, 90, 90)",
              fontSize: "18px",
              ml: "10px",
            }}
          >
            Ad Insights
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              mr: "10px",
            }}
          >
            {checked == true ? (
              <FormControl sx={{ m: 0, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={selectHandleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={15}>Unknown</MenuItem>
                </Select>
              </FormControl>
            ) : (
              ""
            )}
            <HelpOutlineIcon sx={{ color: "#ddd", fontSize: "30px" }} />
          </Box>
        </Box>
        {checked == true ? <Chart selectedValue={age} /> : <ChartData />}
        <Switch
          checked={checked}
          onChange={handleChange}
          sx={{ position: "absolute", bottom: 0, right: 0 }}
        />
      </Box>
    </>
  );
};

export default ChartSection;
