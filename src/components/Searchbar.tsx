import { Box, InputAdornment, TextField } from "@mui/material";
import { ICONS } from "../constants/icons.constants";

const Searchbar = () => {
  return (
    <Box>
      <TextField
        style={{ width: 800 }}
        variant="outlined"
        fullWidth
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ICONS.SEARCH />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <ICONS.CROSS />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Searchbar;
